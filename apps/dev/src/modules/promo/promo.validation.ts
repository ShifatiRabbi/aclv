import { z } from 'zod'

export const createPromoSchema = z.object({
  body: z.object({
    code: z.string().min(3),
    title: z.string().min(3),
    description: z.string().optional(),
    expiresAt: z.string().datetime(),
    discountPercent: z.number().min(0).max(100).optional(),
    discountPoints: z.number().min(0).optional(),
    bonusXp: z.number().min(0).optional(),
    usageLimit: z.number().min(1).optional(),
    eligibleRoles: z.array(z.enum(['student', 'teacher'])).optional(),
    isActive: z.boolean().optional()
  })
})

export const updatePromoSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: createPromoSchema.shape.body.partial()
})
