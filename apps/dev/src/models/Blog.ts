import mongoose from 'mongoose'

export type BlogStatus = 'draft' | 'published'
export type BlogContentSource = 'chemistry_news' | 'educational'

export interface BlogDoc {
  /** Legacy + Bangla default mirror (Bangla) */
  title: string
  slug: string
  excerpt: string
  metaDescription: string
  content: string
  featuredImage: string
  category: string
  tags: string[]

  title_en: string
  title_bn: string
  excerpt_en: string
  excerpt_bn: string
  metaDescription_en: string
  metaDescription_bn: string
  content_en: string
  content_bn: string
  tags_en: string[]
  tags_bn: string[]
  category_en: string
  category_bn: string

  sourceUrls: string[]
  sourceName?: string
  aiGenerated: boolean
  published: boolean
  publishedAt?: Date
  status: BlogStatus

  contentSource: BlogContentSource
  topicKey?: string
  elementAtomicNumber?: number
  elementSymbol?: string
  imagePrompt?: string

  lastGenerationError?: string
}

const BlogSchema = new mongoose.Schema<BlogDoc>(
  {
    title: { type: String, trim: true, index: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
    excerpt: { type: String, trim: true },
    metaDescription: { type: String, trim: true },
    content: { type: String },
    featuredImage: { type: String, required: true, trim: true },
    category: { type: String, trim: true, index: true },
    tags: { type: [String], default: [] },

    title_en: { type: String, trim: true },
    title_bn: { type: String, trim: true },
    excerpt_en: { type: String, trim: true },
    excerpt_bn: { type: String, trim: true },
    metaDescription_en: { type: String, trim: true },
    metaDescription_bn: { type: String, trim: true },
    content_en: { type: String },
    content_bn: { type: String },
    tags_en: { type: [String], default: [] },
    tags_bn: { type: [String], default: [] },
    category_en: { type: String, trim: true },
    category_bn: { type: String, trim: true },

    sourceUrls: { type: [String], default: [], index: true },
    sourceName: { type: String, trim: true },
    aiGenerated: { type: Boolean, default: true, index: true },
    published: { type: Boolean, default: false, index: true },
    publishedAt: { type: Date },
    status: { type: String, enum: ['draft', 'published'], default: 'draft', index: true },

    contentSource: {
      type: String,
      enum: ['chemistry_news', 'educational'],
      default: 'educational',
      index: true
    },
    topicKey: { type: String, trim: true, index: true },
    elementAtomicNumber: { type: Number, index: true },
    elementSymbol: { type: String, trim: true },
    imagePrompt: { type: String, trim: true },
    lastGenerationError: { type: String, trim: true }
  },
  { timestamps: true }
)

BlogSchema.index({ slug: 1 }, { unique: true })
BlogSchema.index({ topicKey: 1, createdAt: -1 })

export const BlogModel = mongoose.models.Blog || mongoose.model<BlogDoc>('Blog', BlogSchema)
