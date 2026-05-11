import type { Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import type { AuthenticatedRequest } from '../../common/middleware/auth.ts'
import { feedbackService } from './feedback.service.ts'

const RATE_WINDOW_MS = 60 * 1000
const RATE_LIMIT_PER_WINDOW = 5
const requestBuckets = new Map<string, number[]>()

function canSubmit(key: string) {
  const now = Date.now()
  const timestamps = requestBuckets.get(key) || []
  const recent = timestamps.filter((time) => now - time < RATE_WINDOW_MS)

  if (recent.length >= RATE_LIMIT_PER_WINDOW) {
    requestBuckets.set(key, recent)
    return false
  }

  recent.push(now)
  requestBuckets.set(key, recent)
  return true
}

export const feedbackController = {
  async create(req: AuthenticatedRequest, res: Response) {
    const sourceKey = req.ip || req.body.anonymousId
    if (!canSubmit(sourceKey)) {
      return res.status(429).json({ success: false, message: 'Too many feedback submissions. Please try later.' })
    }

    const imageUrl = req.file ? `/uploads/feedback/${req.file.filename}` : undefined
    const item = await feedbackService.create({
      page: req.body.page,
      description: req.body.description,
      anonymousId: req.body.anonymousId,
      imageUrl,
      userId: req.user?.userId
    })

    res.status(201).json(sendSuccess('Feedback submitted successfully', { item }))
  },

  async list(req: AuthenticatedRequest, res: Response) {
    const data = await feedbackService.list({
      page: req.query.page as any,
      status: req.query.status as any,
      from: req.query.from as string | undefined,
      to: req.query.to as string | undefined,
      pageNumber: req.query.pageNumber ? Number(req.query.pageNumber) : undefined,
      pageSize: req.query.pageSize ? Number(req.query.pageSize) : undefined
    })
    res.json(sendSuccess('Feedback reports fetched', data))
  },

  async updateStatus(req: AuthenticatedRequest, res: Response) {
    const item = await feedbackService.updateStatus(String(req.params.id), req.body.status)
    if (!item) {
      return res.status(404).json({ success: false, message: 'Feedback report not found' })
    }
    res.json(sendSuccess('Feedback status updated', { item }))
  }
}

