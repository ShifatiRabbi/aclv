import { GoogleGenerativeAI } from '@google/generative-ai'
import slugify from 'slugify'
import type { NewsArticle } from './newsService.ts'

interface GeneratedBlogPayload {
  title: string
  slug: string
  excerpt: string
  metaDescription: string
  tags: string[]
  category: string
  content: string
  imagePrompt: string
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      setTimeout(() => reject(new Error(`Gemini timeout after ${ms}ms`)), ms)
    })
  ])
}

function extractJson(raw: string) {
  const cleaned = raw.replace(/```json|```/g, '').trim()
  const start = cleaned.indexOf('{')
  const end = cleaned.lastIndexOf('}')
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('Invalid Gemini JSON response')
  }
  return JSON.parse(cleaned.slice(start, end + 1))
}

export const geminiService = {
  async generateBlogFromNews(newsData: NewsArticle[]): Promise<GeneratedBlogPayload> {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not set')
    }
    if (!newsData.length) {
      throw new Error('No news data available for generation')
    }

    const model = new GoogleGenerativeAI(apiKey).getGenerativeModel({ model: 'gemini-1.5-flash' })
    const seedArticles = newsData.slice(0, 3).map((item, index) => ({
      index: index + 1,
      title: item.title,
      description: item.description,
      content: item.content,
      source: item.source,
      url: item.url,
      publishedAt: item.publishedAt
    }))

    const prompt = `
You are an expert editorial writer for a production blog.
Task: create one SEO-optimized blog post from these news inputs.

Requirements:
- Human and natural tone (not robotic)
- 700-1200 words
- Avoid plagiarism and fake claims
- Mention source context naturally
- Use unique wording
- If articles are similar, combine them into one coherent editorial
- Content must be HTML using <h2>, <h3>, <p>, <ul>, <li> where relevant
- Respond with JSON only, no extra text

News input:
${JSON.stringify(seedArticles, null, 2)}

Output JSON schema:
{
  "title": "SEO title",
  "slug": "seo-friendly-slug",
  "excerpt": "short excerpt <= 220 chars",
  "metaDescription": "meta description <= 160 chars",
  "tags": ["tag1", "tag2", "tag3"],
  "category": "Technology",
  "content": "<h2>...</h2><p>...</p>...",
  "imagePrompt": "high quality editorial featured image prompt"
}
`

    try {
      const result = await withTimeout(model.generateContent(prompt), 35000)
      const text = result.response.text()
      const parsed = extractJson(text)

      const safeTitle = String(parsed.title ?? '').trim()
      if (!safeTitle) {
        throw new Error('Gemini returned empty title')
      }

      return {
        title: safeTitle,
        slug: slugify(String(parsed.slug ?? safeTitle), { lower: true, strict: true, trim: true }),
        excerpt: String(parsed.excerpt ?? '').trim(),
        metaDescription: String(parsed.metaDescription ?? '').trim(),
        tags: Array.isArray(parsed.tags) ? parsed.tags.map((t: unknown) => String(t)).filter(Boolean) : [],
        category: String(parsed.category ?? 'General').trim(),
        content: String(parsed.content ?? '').trim(),
        imagePrompt: String(parsed.imagePrompt ?? safeTitle).trim()
      }
    } catch (error) {
      console.error('[ai] Gemini generation failed', { error })
      throw error
    }
  }
}
