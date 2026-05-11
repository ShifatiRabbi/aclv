export type BlogContentSource = 'chemistry_news' | 'educational'

export interface BlogItem {
  _id: string
  /** Legacy mirror — Bangla for new posts */
  title?: string
  slug: string
  excerpt?: string
  metaDescription?: string
  content?: string
  featuredImage: string
  category?: string
  tags?: string[]

  title_en?: string
  title_bn?: string
  excerpt_en?: string
  excerpt_bn?: string
  metaDescription_en?: string
  metaDescription_bn?: string
  content_en?: string
  content_bn?: string
  tags_en?: string[]
  tags_bn?: string[]
  category_en?: string
  category_bn?: string

  sourceUrls?: string[]
  sourceName?: string
  aiGenerated?: boolean
  published: boolean
  publishedAt?: string
  createdAt: string
  updatedAt: string

  contentSource?: BlogContentSource
  topicKey?: string
  elementAtomicNumber?: number
  elementSymbol?: string
}
