import { Router } from 'express'
import { authController } from './auth.controller.ts'
import {
  forgotPasswordSchema,
  loginSchema,
  otpSchema,
  refreshSchema,
  registerSchema,
  resetPasswordSchema
} from './auth.validation.ts'
import { validateRequest } from '../../common/middleware/validate.ts'
import { authenticate } from '../../common/middleware/auth.ts'

const authRouter = Router()

authRouter.post('/register', validateRequest(registerSchema), authController.register)
authRouter.post('/login', validateRequest(loginSchema), authController.login)
authRouter.post('/refresh', validateRequest(refreshSchema), authController.refresh)
authRouter.post('/verify-otp', validateRequest(otpSchema), authController.verifyOtp)
authRouter.post('/forgot-password', validateRequest(forgotPasswordSchema), authController.forgotPassword)
authRouter.post('/reset-password', validateRequest(resetPasswordSchema), authController.resetPassword)
authRouter.post('/logout', authenticate, authController.logout)

export default authRouter
