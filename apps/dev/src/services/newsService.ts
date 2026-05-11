import axios from 'axios'

export interface NewsArticle {
  title: string
  description: string
  content: string
  source: string
  url: string
  image: string
  publishedAt: string
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getWithRetry(url: string, retries = 3, timeoutMs = 12000): Promise<any> {
  let lastError: unknown

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await axios.get(url, { timeout: timeoutMs })
      return response.data
    } catch (error) {
      lastError = error
      const waitMs = attempt * 600
      console.error('[news] request failed', { attempt, waitMs, error })
      if (attempt < retries) {
        await sleep(waitMs)
      }
    }
  }

  throw lastError
}

function normalizeArticle(article: any): NewsArticle | null {
  if (!article?.title || !article?.url) {
    return null
  }

  return {
    title: String(article.title).trim(),
    description: String(article.description ?? '').trim(),
    content: String(article.content ?? article.description ?? '').trim(),
    source: String(article.source?.name ?? article.source ?? 'Unknown').trim(),
    url: String(article.url).trim(),
    image: String(article.urlToImage ?? article.image ?? '').trim(),
    publishedAt: String(article.publishedAt ?? new Date().toISOString())
  }
}

const CHEMISTRY_SIGNAL_WORDS = [
  'chem',
  'molecule',
  'compound',
  'reaction',
  'catalyst',
  'polymer',
  'organic',
  'inorganic',
  'nobel',
  'synthesis',
  'laboratory',
  'lab',
  'acid',
  'base',
  'ph ',
  'ph.',
  'ion',
  'electron',
  'atom',
  'periodic',
  'metal',
  'oxide',
  'nanomat',
  'battery',
  'electroly',
  'fuel cell',
  'enzyme',
  'protein structure',
  'crystall',
  'solvent',
  'toxic',
  'hazard',
  'pollut',
  'climate',
  'carbon',
  'hydrogen',
  'oxygen',
  'nitrogen',
  'fluorine',
  'chlorine',
  'sodium',
  'lithium',
  'copper',
  'iron',
  'gold',
  'silver',
  'chemical engineering',
  'materials science'
]

function chemistryRelevanceScore(article: NewsArticle): number {
  const blob = `${article.title} ${article.description} ${article.content}`.toLowerCase()
  let score = 0
  for (const word of CHEMISTRY_SIGNAL_WORDS) {
    if (blob.includes(word)) {
      score += 1
    }
  }
  if (/\b\d{1,3}\s*(ppm|mol|molar|nm|µm|um|nanometer)\b/i.test(blob)) {
    score += 2
  }
  return score
}

function defaultChemistryQueries(): string[] {
  const fromEnv = process.env.CHEMISTRY_NEWS_QUERIES
  if (fromEnv?.trim()) {
    return fromEnv
      .split('|')
      .map((q) => q.trim())
      .filter(Boolean)
  }
  return [
    '("chemistry" OR "chemical reaction" OR "organic chemistry" OR "inorganic chemistry")',
    '("periodic table" OR "chemical compound" OR "catalyst")',
    '("materials science" AND ("chemistry" OR "chemical"))',
    '("laboratory" AND ("chemistry" OR "chemical"))',
    '("nanotechnology" OR "nanomaterial") AND chemistry',
    '("environmental chemistry" OR "green chemistry")',
    '("Nobel Prize" AND chemistry)'
  ]
}

export const newsService = {
  /**
   * Chemistry-focused headlines via keyword queries (not generic category feeds).
   * If NEWS_API_KEY is missing, returns [] so the hybrid engine can use educational mode.
   */
  async fetchChemistryNews(): Promise<NewsArticle[]> {
    const apiKey = process.env.NEWS_API_KEY
    if (!apiKey) {
      console.log('[news] NEWS_API_KEY not set — skipping chemistry news fetch')
      return []
    }

    const queries = defaultChemistryQueries()
    const lookbackDays = Math.min(30, Math.max(1, Number(process.env.CHEMISTRY_NEWS_LOOKBACK_DAYS ?? 7)))
    const fromDate = new Date()
    fromDate.setDate(fromDate.getDate() - lookbackDays)
    const from = fromDate.toISOString().slice(0, 10)

    const requests = queries.map((q) => {
      const url =
        `https://newsapi.org/v2/everything?` +
        `q=${encodeURIComponent(q)}` +
        `&language=en&sortBy=publishedAt&pageSize=12&from=${from}&apiKey=${apiKey}`
      return getWithRetry(url)
    })

    const responses = await Promise.allSettled(requests)
    const articles: NewsArticle[] = []

    responses.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        const batch = (result.value?.articles ?? [])
          .map(normalizeArticle)
          .filter((item): item is NewsArticle => Boolean(item))
        articles.push(...batch)
      } else {
        console.error('[news] chemistry query failed', { queryIndex: index, reason: result.reason })
      }
    })

    const uniqueByUrl = Array.from(new Map(articles.map((item) => [item.url, item])).values())
    const scored = uniqueByUrl
      .map((article) => ({ article, score: chemistryRelevanceScore(article) }))
      .filter((row) => row.score >= 2)
      .sort((a, b) => b.score - a.score || +new Date(b.article.publishedAt) - +new Date(a.article.publishedAt))

    const meaningful = scored.map((row) => row.article)
    console.log('[news] chemistry news candidates', { raw: uniqueByUrl.length, meaningful: meaningful.length })
    return meaningful
  }
}
