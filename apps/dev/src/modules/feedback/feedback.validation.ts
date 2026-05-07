import { z } from 'zod'

export const createFeedbackSchema = z.object({
  body: z.object({
    page: z.enum(['VLab', 'Chemicals', 'Elements', 'Accessories']),
    description: z.string().min(10).max(2000),
    anonymousId: z.string().min(8).max(128),
    timestamp: z.string().optional()
  })
})

export const adminFeedbackQuerySchema = z.object({
  query: z.object({
    page: z.enum(['VLab', 'Chemicals', 'Elements', 'Accessories']).optional(),
    status: z.enum(['open', 'in_progress', 'resolved']).optional(),
    from: z.string().optional(),
    to: z.string().optional(),
    pageNumber: z.coerce.number().int().min(1).optional(),
    pageSize: z.coerce.number().int().min(1).max(100).optional()
  })
})

export const updateFeedbackStatusSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    status: z.enum(['open', 'in_progress', 'resolved'])
  })
})

