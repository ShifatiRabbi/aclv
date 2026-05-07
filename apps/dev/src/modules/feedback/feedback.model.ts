import mongoose from 'mongoose'

export type FeedbackPage = 'VLab' | 'Chemicals' | 'Elements' | 'Accessories'
export type FeedbackStatus = 'open' | 'in_progress' | 'resolved'

export interface FeedbackReportDoc {
  page: FeedbackPage
  description: string
  imageUrl?: string
  userId?: string
  anonymousId: string
  status: FeedbackStatus
  createdAt: Date
  updatedAt: Date
}

const FeedbackReportSchema = new mongoose.Schema<FeedbackReportDoc>(
  {
    page: {
      type: String,
      enum: ['VLab', 'Chemicals', 'Elements', 'Accessories'],
      required: true,
      index: true
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000
    },
    imageUrl: {
      type: String,
      trim: true
    },
    userId: {
      type: String,
      index: true
    },
    anonymousId: {
      type: String,
      required: true,
      index: true
    },
    status: {
      type: String,
      enum: ['open', 'in_progress', 'resolved'],
      default: 'open',
      index: true
    }
  },
  { timestamps: true }
)

FeedbackReportSchema.index({ createdAt: -1 })
FeedbackReportSchema.index({ page: 1, status: 1, createdAt: -1 })

export const FeedbackReportModel =
  mongoose.models.FeedbackReport || mongoose.model<FeedbackReportDoc>('FeedbackReport', FeedbackReportSchema)

