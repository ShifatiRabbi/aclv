import { z } from 'zod'

export const accessoriesQuerySchema = z.object({
  query: z.object({}).optional()
})
