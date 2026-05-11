import { z } from 'zod'

export const generateBlogSchema = z.object({
  body: z.object({
    urls: z.array(z.string().url()).optional(),
    force: z.boolean().optional()
  })
})
