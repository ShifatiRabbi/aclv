import { Router } from 'express'
import { authController } from './auth.controller.ts'
import { loginSchema } from './auth.validation.ts'
import { validateRequest } from '../../common/middleware/validate.ts'

const authRouter = Router()

authRouter.post('/login', validateRequest(loginSchema), authController.login)

export default authRouter
