export interface BlogItem {
  _id: string
  title: string
  slug: string
  excerpt: string
  metaDescription: string
  content: string
  featuredImage: string
  category: string
  tags: string[]
  sourceUrls: string[]
  sourceName?: string
  aiGenerated: boolean
  published: boolean
  publishedAt?: string
  createdAt: string
  updatedAt: string
}
