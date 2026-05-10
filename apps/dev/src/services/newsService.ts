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

async function getWithRetry(url: string, retries = 3, timeoutMs = 10000): Promise<any> {
  let lastError: unknown

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await axios.get(url, { timeout: timeoutMs })
      return response.data
    } catch (error) {
      lastError = error
      const waitMs = attempt * 500
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

export const newsService = {
  async fetchLatestNews() {
    const apiKey = process.env.NEWS_API_KEY
    const categories = (process.env.NEWS_CATEGORIES ?? 'technology,science,business')
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean)

    if (!apiKey) {
      throw new Error('NEWS_API_KEY is not set')
    }

    const requests = categories.map((category) => {
      const url = `https://newsapi.org/v2/top-headlines?language=en&pageSize=10&category=${encodeURIComponent(category)}&apiKey=${apiKey}`
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
        console.error('[news] category fetch failed', { category: categories[index], reason: result.reason })
      }
    })

    const uniqueByUrl = Array.from(new Map(articles.map((item) => [item.url, item])).values())
    return uniqueByUrl.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
  }
}
