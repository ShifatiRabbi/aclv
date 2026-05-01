import { z } from 'zod'

export const getReactionByIdSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  })
})
