import { GoogleGenerativeAI } from '@google/generative-ai'
import slugify from 'slugify'
import type { NewsArticle } from './newsService.ts'

export interface BilingualGeneratedBlog {
  slug: string
  title_en: string
  title_bn: string
  excerpt_en: string
  excerpt_bn: string
  metaDescription_en: string
  metaDescription_bn: string
  tags_en: string[]
  tags_bn: string[]
  category_en: string
  category_bn: string
  content_en: string
  content_bn: string
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

function getModel() {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set')
  }
  const modelName = process.env.GEMINI_MODEL ?? 'gemini-1.5-flash'
  return new GoogleGenerativeAI(apiKey).getGenerativeModel({ model: modelName })
}

const EDITOR_VOICE = `You are a senior chemistry educator and science magazine editor for an online virtual chemistry laboratory platform.
Audience: secondary/university students, self-learners, and people using chemistry simulations.
Write like a thoughtful human teacher-editor: warm, precise, curious, never salesy.
Rules:
- Natural, varied sentence rhythm; avoid repetitive transitions ("Moreover", "In conclusion", "It is important to note").
- Avoid generic AI filler, buzzwords, and robotic lists. Use short paragraphs.
- Teach clearly: define terms, build intuition, connect to lab practice and everyday life where honest.
- Include safety notes when relevant (PPE, ventilation, never taste/smell unknowns, read SDS mindset).
- Do NOT invent specific new research claims, statistics, or quotes. If using news, stay faithful to the provided facts and attribute sources in-text.
- SEO: one clear primary topic; use descriptive <h2>/<h3>; do not keyword-stuff.
- Format: HTML only in content fields, using <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>. No markdown fences inside JSON.
- Length: about 700–1100 words per language (similar depth; Bangla should be a native rewrite, not word-for-word translation).
- Bangla: natural বাংলা flow; student-friendly; scientific terms may stay in common English where বাংলা readers expect (e.g., electron, oxidation). Avoid awkward literal translation.
- JSON only in your reply. No preamble.`

function normalizeBilingual(parsed: any, fallbackSlugBase: string): BilingualGeneratedBlog {
  const title_en = String(parsed.title_en ?? '').trim()
  const title_bn = String(parsed.title_bn ?? '').trim()
  if (!title_en || !title_bn) {
    throw new Error('Gemini returned incomplete bilingual titles')
  }

  const slugRaw = String(parsed.slug ?? title_en)
  const slug = slugify(slugRaw, { lower: true, strict: true, trim: true }) || slugify(fallbackSlugBase, { lower: true, strict: true, trim: true })

  return {
    slug,
    title_en,
    title_bn,
    excerpt_en: String(parsed.excerpt_en ?? '').trim(),
    excerpt_bn: String(parsed.excerpt_bn ?? '').trim(),
    metaDescription_en: String(parsed.metaDescription_en ?? '').trim(),
    metaDescription_bn: String(parsed.metaDescription_bn ?? '').trim(),
    tags_en: Array.isArray(parsed.tags_en) ? parsed.tags_en.map((t: unknown) => String(t)).filter(Boolean) : [],
    tags_bn: Array.isArray(parsed.tags_bn) ? parsed.tags_bn.map((t: unknown) => String(t)).filter(Boolean) : [],
    category_en: String(parsed.category_en ?? 'Chemistry').trim(),
    category_bn: String(parsed.category_bn ?? 'রসায়ন').trim(),
    content_en: String(parsed.content_en ?? '').trim(),
    content_bn: String(parsed.content_bn ?? '').trim(),
    imagePrompt: String(parsed.imagePrompt ?? title_en).trim()
  }
}

export const geminiService = {
  async generateBilingualChemistryFromNews(newsData: NewsArticle[]): Promise<BilingualGeneratedBlog> {
    if (!newsData.length) {
      throw new Error('No news data available for generation')
    }

    const seedArticles = newsData.slice(0, 3).map((item, index) => ({
      index: index + 1,
      title: item.title,
      description: item.description,
      content: item.content,
      source: item.source,
      url: item.url,
      publishedAt: item.publishedAt
    }))

    const prompt = `${EDITOR_VOICE}

Task: Turn the following chemistry-related news material into ONE bilingual educational article for students.
Summarize faithfully, explain the chemistry, and connect to learning/labs. Mention sources naturally with the publication/source name (no fake quotes).

News input:
${JSON.stringify(seedArticles, null, 2)}

Return JSON exactly in this shape:
{
  "slug": "seo-slug-in-english-latin-characters-only",
  "title_en": "",
  "title_bn": "",
  "excerpt_en": "",
  "excerpt_bn": "",
  "metaDescription_en": "",
  "metaDescription_bn": "",
  "tags_en": [],
  "tags_bn": [],
  "category_en": "",
  "category_bn": "",
  "content_en": "<h2>...</h2>...",
  "content_bn": "<h2>...</h2>...",
  "imagePrompt": "Educational chemistry illustration: modern lab, molecules, periodic motif, clean scientific poster style, no text overlays"
}
`

    try {
      const model = getModel()
      const result = await withTimeout(model.generateContent(prompt), 55000)
      const text = result.response.text()
      const parsed = extractJson(text)
      return normalizeBilingual(parsed, seedArticles[0]?.title ?? 'chemistry-news')
    } catch (error) {
      console.error('[ai] bilingual chemistry news generation failed', { error })
      throw error
    }
  },

  async generateBilingualEducationalArticle(payload: {
    topicKey: string
    kind: 'element' | 'concept'
    element?: Record<string, unknown>
    conceptSeed?: string
  }): Promise<BilingualGeneratedBlog> {
    const prompt = `${EDITOR_VOICE}

Task: Write ONE evergreen bilingual chemistry lesson for the platform.
Topic key: ${payload.topicKey}
Mode: ${payload.kind === 'element' ? "Today's element spotlight" : 'Concept deep-dive'}

${payload.kind === 'element' ? `Use this verified element data as ground truth (do not contradict it):\n${JSON.stringify(payload.element, null, 2)}` : `Concept seed:\n${payload.conceptSeed ?? ''}`}

Structure guidance (flexible, not a rigid template):
- Open with a curiosity hook tied to labs or daily life.
- Teach core ideas with plain explanations + one memorable analogy where helpful.
- For elements: properties, periodic trends intuition, common compounds/uses, one simple reaction idea if appropriate, safety cautions if toxic/reactive.
- Close with "what to try in the simulator/lab mindset" without inventing specific proprietary lab steps.

Return JSON exactly in this shape:
{
  "slug": "seo-slug-in-english-latin-characters-only",
  "title_en": "",
  "title_bn": "",
  "excerpt_en": "",
  "excerpt_bn": "",
  "metaDescription_en": "",
  "metaDescription_bn": "",
  "tags_en": [],
  "tags_bn": [],
  "category_en": "",
  "category_bn": "",
  "content_en": "<h2>...</h2>...",
  "content_bn": "<h2>...</h2>...",
  "imagePrompt": "Educational chemistry illustration: molecular structures, periodic table accents, clean modern lab, scientific poster, chemistry learning platform, no text overlays"
}
`

    try {
      const model = getModel()
      const result = await withTimeout(model.generateContent(prompt), 55000)
      const text = result.response.text()
      const parsed = extractJson(text)
      return normalizeBilingual(parsed, payload.topicKey)
    } catch (error) {
      console.error('[ai] bilingual educational generation failed', { error, topicKey: payload.topicKey })
      throw error
    }
  }
}
