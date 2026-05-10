import slugify from 'slugify'
import { BlogModel } from '../../models/Blog.ts'
import { newsService, type NewsArticle } from '../../services/newsService.ts'
import { geminiService } from '../../services/geminiService.ts'
import { imageService } from '../../services/imageService.ts'

interface BlogGenerationOptions {
  autoPublish?: boolean
}

function normalizeText(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim()
}

async function buildUniqueSlug(base: string) {
  const seed = slugify(base, { lower: true, strict: true, trim: true }) || `blog-${Date.now()}`
  let slug = seed
  let counter = 1

  while (await (BlogModel as any).exists({ slug })) {
    counter += 1
    slug = `${seed}-${counter}`
  }

  return slug
}

export const blogService = {
  async listPublished() {
    const model = BlogModel as any
    return model.find({ published: true }).sort({ publishedAt: -1, createdAt: -1 }).lean()
  },

  async listAllForAdmin() {
    const model = BlogModel as any
    return model.find().sort({ createdAt: -1 }).lean()
  },

  async getBySlug(slug: string) {
    const model = BlogModel as any
    return model.findOne({ slug, published: true }).lean()
  },

  async publishById(id: string) {
    const model = BlogModel as any
    return model.findByIdAndUpdate(
      id,
      { published: true, status: 'published', publishedAt: new Date() },
      { new: true }
    ).lean()
  },

  async deleteById(id: string) {
    const model = BlogModel as any
    return model.findByIdAndDelete(id).lean()
  },

  async checkDuplicate(article: NewsArticle) {
    const model = BlogModel as any
    const sourceMatch = await model.findOne({ sourceUrls: article.url }).lean()
    if (sourceMatch) {
      return { duplicate: true, reason: 'source_url' }
    }

    const normalizedIncoming = normalizeText(article.title)
    const titleMatches = await model.find({}, { title: 1, slug: 1 }).lean()
    const similarTitle = titleMatches.find((item: { title: string }) => {
      const savedTitle = normalizeText(item.title ?? '')
      return savedTitle.includes(normalizedIncoming) || normalizedIncoming.includes(savedTitle)
    })
    if (similarTitle) {
      return { duplicate: true, reason: 'similar_title' }
    }

    const slug = slugify(article.title, { lower: true, strict: true, trim: true })
    const slugMatch = await model.findOne({ slug }).lean()
    if (slugMatch) {
      return { duplicate: true, reason: 'slug_exists' }
    }

    return { duplicate: false, reason: null as string | null }
  },

  async generateFromNewsArticles(newsBatch: NewsArticle[], options: BlogGenerationOptions = {}) {
    const autoPublish = Boolean(options.autoPublish)
    const aiBlog = await geminiService.generateBlogFromNews(newsBatch)
    const articleSources = newsBatch.map((item) => item.url).filter(Boolean)
    const primarySource = newsBatch[0]

    const finalSlug = await buildUniqueSlug(aiBlog.slug || aiBlog.title)
    const featuredImage = imageService.generateFeaturedImageUrl(aiBlog.imagePrompt || aiBlog.title)
    const now = new Date()

    const model = BlogModel as any
    const blog = await model.create({
      title: aiBlog.title,
      slug: finalSlug,
      excerpt: aiBlog.excerpt || aiBlog.title,
      metaDescription: aiBlog.metaDescription || aiBlog.excerpt || aiBlog.title,
      content: aiBlog.content,
      featuredImage,
      category: aiBlog.category || 'General',
      tags: aiBlog.tags?.length ? aiBlog.tags : ['news', 'analysis'],
      sourceUrls: articleSources,
      sourceName: primarySource?.source ?? 'News',
      aiGenerated: true,
      published: autoPublish,
      publishedAt: autoPublish ? now : undefined,
      status: autoPublish ? 'published' : 'draft'
    })

    return blog.toObject()
  },

  async generateFromLatestNews(options: BlogGenerationOptions = {}) {
    const latest = await newsService.fetchLatestNews()
    let generated = 0
    let skipped = 0
    const items: any[] = []

    for (const article of latest) {
      const duplicate = await this.checkDuplicate(article)
      if (duplicate.duplicate) {
        skipped += 1
        console.log('[blog] duplicate skipped', { reason: duplicate.reason, title: article.title })
        continue
      }

      try {
        const blog = await this.generateFromNewsArticles([article], options)
        items.push(blog)
        generated += 1
      } catch (error) {
        console.error('[blog] generation failed for article', { title: article.title, error })
      }

      if (generated >= 3) {
        break
      }
    }

    return { items, generated, skipped, fetched: latest.length }
  }
}
