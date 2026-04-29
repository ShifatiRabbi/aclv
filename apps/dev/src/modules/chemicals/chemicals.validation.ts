import { z } from 'zod'

export const getChemicalByIdSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  })
})
