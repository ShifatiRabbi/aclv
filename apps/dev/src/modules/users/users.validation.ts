import { z } from 'zod'

export const updateRoleSchema = z.object({
  params: z.object({
    id: z.string().min(1)
  }),
  body: z.object({
    role: z.enum(['super_admin', 'admin', 'staff', 'teacher', 'student'])
  })
})
