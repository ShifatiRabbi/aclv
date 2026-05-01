import type { Request, Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import { authService } from './auth.service.ts'

export const authController = {
  login(req: Request, res: Response) {
    const { email, password } = req.body as { email: string; password: string }
    const auth = authService.login(email, password)
    res.json(sendSuccess('Login successful', auth))
  }
}
