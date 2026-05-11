import { z } from 'zod'

export const createReferralSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    code: z.string().min(3),
    expiresAt: z.string().datetime(),
    discountPoints: z.number().min(0).optional(),
    bonusXp: z.number().min(0).optional(),
    usageLimit: z.number().min(1).optional(),
    isActive: z.boolean().optional()
  })
})

export const updateReferralSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: createReferralSchema.shape.body.partial()
})
