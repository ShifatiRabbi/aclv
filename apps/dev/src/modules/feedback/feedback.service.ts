import { FeedbackReportModel, type FeedbackPage, type FeedbackStatus } from './feedback.model.ts'

interface CreateFeedbackInput {
  page: FeedbackPage
  description: string
  imageUrl?: string
  userId?: string
  anonymousId: string
}

interface ListFeedbackQuery {
  page?: FeedbackPage
  status?: FeedbackStatus
  from?: string
  to?: string
  pageNumber?: number
  pageSize?: number
}

export const feedbackService = {
  create(input: CreateFeedbackInput) {
    return (FeedbackReportModel as any).create({
      ...input,
      status: 'open'
    })
  },

  async list(query: ListFeedbackQuery) {
    const pageNumber = Math.max(1, Number(query.pageNumber || 1))
    const pageSize = Math.max(1, Math.min(100, Number(query.pageSize || 20)))
    const skip = (pageNumber - 1) * pageSize

    const filter: Record<string, unknown> = {}
    if (query.page) filter.page = query.page
    if (query.status) filter.status = query.status

    if (query.from || query.to) {
      filter.createdAt = {}
      if (query.from) (filter.createdAt as Record<string, unknown>).$gte = new Date(query.from)
      if (query.to) (filter.createdAt as Record<string, unknown>).$lte = new Date(query.to)
    }

    const [items, total] = await Promise.all([
      (FeedbackReportModel as any).find(filter).sort({ createdAt: -1 }).skip(skip).limit(pageSize).lean(),
      FeedbackReportModel.countDocuments(filter)
    ])

    return {
      items,
      pagination: {
        total,
        pageNumber,
        pageSize,
        totalPages: Math.max(1, Math.ceil(total / pageSize))
      }
    }
  },

  updateStatus(id: string, status: FeedbackStatus) {
    return (FeedbackReportModel as any).findByIdAndUpdate(id, { status }, { new: true }).lean()
  }
}

