import { z } from 'zod'

const passwordSchema = z
  .string()
  .min(8)
  .regex(/[A-Z]/, 'Password must include an uppercase letter')
  .regex(/[a-z]/, 'Password must include a lowercase letter')
  .regex(/\d/, 'Password must include a number')

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })
})

export const registerSchema = z.object({
  body: z
    .object({
      name: z.string().min(2),
      username: z.string().min(3),
      email: z.string().email(),
      password: passwordSchema,
      role: z.enum(['student', 'teacher']),
      institution: z.string().min(2).optional(),
      qualification: z.string().min(2).optional(),
      subjectExpertise: z.string().min(2).optional(),
      classLevel: z.string().min(1).optional(),
      referralCode: z.string().min(3).optional(),
      promoCode: z.string().min(3).optional()
    })
    .superRefine((value, ctx) => {
      if (value.role === 'teacher') {
        if (!value.institution) {
          ctx.addIssue({ code: 'custom', path: ['institution'], message: 'Institution is required for teachers' })
        }
        if (!value.qualification) {
          ctx.addIssue({ code: 'custom', path: ['qualification'], message: 'Qualification is required for teachers' })
        }
        if (!value.subjectExpertise) {
          ctx.addIssue({
            code: 'custom',
            path: ['subjectExpertise'],
            message: 'Subject expertise is required for teachers'
          })
        }
      }

      if (value.role === 'student') {
        if (!value.institution) {
          ctx.addIssue({ code: 'custom', path: ['institution'], message: 'Institution is required for students' })
        }
        if (!value.classLevel) {
          ctx.addIssue({ code: 'custom', path: ['classLevel'], message: 'Class/level is required for students' })
        }
      }
    })
})

export const refreshSchema = z.object({
  body: z.object({ refreshToken: z.string().optional() }).optional()
})

export const otpSchema = z.object({
  body: z.object({
    email: z.string().email(),
    otp: z.string().length(6),
    purpose: z.enum(['email_verification', 'reset_password'])
  })
})

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.string().email()
  })
})

export const resetPasswordSchema = z.object({
  body: z.object({
    email: z.string().email(),
    otp: z.string().length(6),
    newPassword: passwordSchema
  })
})
