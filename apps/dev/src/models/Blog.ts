import mongoose from 'mongoose'

export type BlogStatus = 'draft' | 'published'

export interface BlogDoc {
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
  publishedAt?: Date
  status: BlogStatus
}

const BlogSchema = new mongoose.Schema<BlogDoc>(
  {
    title: { type: String, required: true, trim: true, index: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
    excerpt: { type: String, required: true, trim: true },
    metaDescription: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    featuredImage: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true, index: true },
    tags: { type: [String], default: [] },
    sourceUrls: { type: [String], default: [], index: true },
    sourceName: { type: String, trim: true },
    aiGenerated: { type: Boolean, default: true, index: true },
    published: { type: Boolean, default: false, index: true },
    publishedAt: { type: Date },
    status: { type: String, enum: ['draft', 'published'], default: 'draft', index: true }
  },
  { timestamps: true }
)

BlogSchema.index({ slug: 1 }, { unique: true })

export const BlogModel = mongoose.models.Blog || mongoose.model<BlogDoc>('Blog', BlogSchema)
