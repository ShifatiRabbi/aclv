export type FeedbackPage = 'VLab' | 'Chemicals' | 'Elements' | 'Accessories'
export type FeedbackStatus = 'open' | 'in_progress' | 'resolved'

export interface FeedbackReport {
  _id: string
  page: FeedbackPage
  description: string
  imageUrl?: string
  userId?: string
  anonymousId: string
  status: FeedbackStatus
  createdAt: string
}

