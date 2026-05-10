import { createHash } from 'crypto'
import slugify from 'slugify'
import { BlogModel } from '../../models/Blog.ts'
import { newsService, type NewsArticle } from '../../services/newsService.ts'
import { geminiService } from '../../services/geminiService.ts'
import { imageService } from '../../services/imageService.ts'
import { chemistryTopicService } from '../../services/chemistryTopicService.ts'
import type { BilingualGeneratedBlog } from '../../services/geminiService.ts'

interface BlogGenerationOptions {
  autoPublish?: boolean
}

function normalizeComparable(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, ' ')
}

function newsTopicKey(url: string) {
  return `news:${createHash('sha256').update(url).digest('hex').slice(0, 24)}`
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

function titlesTooSimilar(a: string, b: string) {
  const left = normalizeComparable(a)
  const right = normalizeComparable(b)
  if (!left || !right) {
    return false
  }
  if (left === right) {
    return true
  }
  const shorter = left.length < right.length ? left : right
  const longer = left.length < right.length ? right : left
  if (shorter.length >= 18 && longer.includes(shorter)) {
    return true
  }
  return false
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
    return model
      .findByIdAndUpdate(id, { published: true, status: 'published', publishedAt: new Date() }, { new: true })
      .lean()
  },

  async deleteById(id: string) {
    const model = BlogModel as any
    return model.findByIdAndDelete(id).lean()
  },

  async checkNewsDuplicate(article: NewsArticle) {
    const model = BlogModel as any
    const sourceMatch = await model.findOne({ sourceUrls: article.url }).lean()
    if (sourceMatch) {
      return { duplicate: true, reason: 'source_url' as const }
    }

    const topicKey = newsTopicKey(article.url)
    const topicMatch = await model.findOne({ topicKey }).lean()
    if (topicMatch) {
      return { duplicate: true, reason: 'topic_key' as const }
    }

    const incoming = normalizeComparable(article.title)
    const candidates = await model
      .find({}, { title: 1, title_en: 1, title_bn: 1, slug: 1 })
      .sort({ createdAt: -1 })
      .limit(120)
      .lean()

    for (const item of candidates) {
      const fields = [item.title_en, item.title_bn, item.title].filter(Boolean) as string[]
      for (const field of fields) {
        if (titlesTooSimilar(article.title, field) || (incoming && normalizeComparable(field).includes(incoming))) {
          return { duplicate: true, reason: 'similar_title' as const }
        }
      }
    }

    const slug = slugify(article.title, { lower: true, strict: true, trim: true })
    if (slug) {
      const slugMatch = await model.findOne({ slug }).lean()
      if (slugMatch) {
        return { duplicate: true, reason: 'slug_exists' as const }
      }
    }

    return { duplicate: false, reason: null as null }
  },

  async checkEducationalDuplicate(topicKey: string, elementZ?: number) {
    const model = BlogModel as any
    const recentSince = new Date(Date.now() - 14 * 86400000)

    const topicRecent = await model.exists({ topicKey, createdAt: { $gte: recentSince } })
    if (topicRecent) {
      return { duplicate: true, reason: 'topic_recent' as const }
    }

    if (typeof elementZ === 'number') {
      const elementRecent = await model.exists({ elementAtomicNumber: elementZ, createdAt: { $gte: recentSince } })
      if (elementRecent) {
        return { duplicate: true, reason: 'element_recent' as const }
      }
    }

    return { duplicate: false, reason: null as null }
  },

  async persistBilingualBlog(payload: {
    ai: BilingualGeneratedBlog
    contentSource: 'chemistry_news' | 'educational'
    topicKey: string
    sourceUrls: string[]
    sourceName?: string
    elementAtomicNumber?: number
    elementSymbol?: string
    autoPublish: boolean
  }) {
    const { ai, contentSource, topicKey, sourceUrls, sourceName, elementAtomicNumber, elementSymbol, autoPublish } = payload
    const finalSlug = await buildUniqueSlug(ai.slug || ai.title_en)
    const featuredImage = imageService.generateFeaturedImageUrl(ai.imagePrompt || ai.title_en)
    const now = new Date()

    const model = BlogModel as any
    const blog = await model.create({
      title: ai.title_bn,
      slug: finalSlug,
      excerpt: ai.excerpt_bn,
      metaDescription: ai.metaDescription_bn,
      content: ai.content_bn,
      featuredImage,
      category: ai.category_bn,
      tags: ai.tags_bn?.length ? ai.tags_bn : ['রসায়ন', 'শিক্ষা'],

      title_en: ai.title_en,
      title_bn: ai.title_bn,
      excerpt_en: ai.excerpt_en,
      excerpt_bn: ai.excerpt_bn,
      metaDescription_en: ai.metaDescription_en,
      metaDescription_bn: ai.metaDescription_bn,
      content_en: ai.content_en,
      content_bn: ai.content_bn,
      tags_en: ai.tags_en,
      tags_bn: ai.tags_bn,
      category_en: ai.category_en,
      category_bn: ai.category_bn,

      sourceUrls,
      sourceName,
      aiGenerated: true,
      published: autoPublish,
      publishedAt: autoPublish ? now : undefined,
      status: autoPublish ? 'published' : 'draft',
      contentSource,
      topicKey,
      elementAtomicNumber,
      elementSymbol,
      imagePrompt: ai.imagePrompt
    })

    return blog.toObject()
  },

  async generateFromNewsArticles(newsBatch: NewsArticle[], options: BlogGenerationOptions = {}) {
    const autoPublish = Boolean(options.autoPublish)
    const aiBlog = await geminiService.generateBilingualChemistryFromNews(newsBatch)
    const articleSources = newsBatch.map((item) => item.url).filter(Boolean)
    const primarySource = newsBatch[0]
    const topicKey = newsTopicKey(primarySource.url)

    console.log('[blog] AI news generation success', {
      slug: aiBlog.slug,
      topicKey,
      titles: { en: aiBlog.title_en, bn: aiBlog.title_bn }
    })

    return this.persistBilingualBlog({
      ai: aiBlog,
      contentSource: 'chemistry_news',
      topicKey,
      sourceUrls: articleSources,
      sourceName: primarySource?.source ?? 'News',
      autoPublish
    })
  },

  async generateEducationalArticle(options: BlogGenerationOptions = {}) {
    const autoPublish = Boolean(options.autoPublish)

    for (let attempt = 0; attempt < 4; attempt += 1) {
      const pick = await chemistryTopicService.pickEducationalTopic()

      const dup = await this.checkEducationalDuplicate(
        pick.topicKey,
        pick.kind === 'element' ? (pick.elementPayload?.atomic_number as number | undefined) : undefined
      )
      if (dup.duplicate) {
        console.log('[blog] educational duplicate skipped', { reason: dup.reason, topicKey: pick.topicKey, attempt })
        continue
      }

      try {
        const aiBlog = await geminiService.generateBilingualEducationalArticle({
          topicKey: pick.topicKey,
          kind: pick.kind,
          element: pick.kind === 'element' ? pick.elementPayload : undefined,
          conceptSeed: pick.kind === 'concept' ? String(pick.elementPayload?.concept_seed ?? '') : undefined
        })

        const elementZ = pick.kind === 'element' ? (pick.elementPayload?.atomic_number as number | undefined) : undefined
        const symbol = pick.kind === 'element' ? String(pick.elementPayload?.symbol ?? '') : undefined

        console.log('[blog] AI educational generation success', {
          topicKey: pick.topicKey,
          kind: pick.kind,
          elementZ,
          titles: { en: aiBlog.title_en, bn: aiBlog.title_bn }
        })

        return this.persistBilingualBlog({
          ai: aiBlog,
          contentSource: 'educational',
          topicKey: pick.topicKey,
          sourceUrls: [],
          sourceName: pick.kind === 'element' ? 'Periodic table data' : 'Reaxorium curriculum',
          elementAtomicNumber: elementZ,
          elementSymbol: symbol,
          autoPublish
        })
      } catch (error) {
        console.error('[blog] educational generation attempt failed', { attempt, topicKey: pick.topicKey, error })
      }
    }

    return null
  },

  /**
   * Hybrid cycle: chemistry news first; if nothing usable, generate educational content from DB-backed topics.
   */
  async generateFromLatestNews(options: BlogGenerationOptions = {}) {
    const autoPublish = Boolean(options.autoPublish)
    const items: any[] = []
    let skipped = 0
    let fetched = 0

    const latest = await newsService.fetchChemistryNews()
    fetched = latest.length

    for (const article of latest) {
      if (items.length >= 2) {
        break
      }
      const duplicate = await this.checkNewsDuplicate(article)
      if (duplicate.duplicate) {
        skipped += 1
        console.log('[blog] duplicate skipped (news)', { reason: duplicate.reason, title: article.title })
        continue
      }
      try {
        const blog = await this.generateFromNewsArticles([article], { autoPublish })
        items.push(blog)
      } catch (error) {
        console.error('[blog] generation failed for article', { title: article.title, error })
      }
    }

    if (!items.length) {
      try {
        const edu = await this.generateEducationalArticle({ autoPublish })
        if (edu) {
          items.push(edu)
        }
      } catch (error) {
        console.error('[blog] educational fallback failed', { error })
      }
    }

    return { items, generated: items.length, skipped, fetched }
  }
}
