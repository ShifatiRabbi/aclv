import type { Request, Response } from 'express'
import { sendSuccess } from '../../common/utils/apiResponse.ts'
import { authService } from './auth.service.ts'
import type { AuthenticatedRequest } from '../../common/middleware/auth.ts'

function setAuthCookies(res: Response, accessToken: string, refreshToken: string) {
  const secure = process.env.NODE_ENV === 'production'
  res.cookie('reaxorium_access_token', accessToken, {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 15
  })
  res.cookie('reaxorium_refresh_token', refreshToken, {
    httpOnly: true,
    secure,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7
  })
}

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const result = await authService.register(req.body)
      res.status(201).json(sendSuccess('Registration successful. Verify your email OTP.', result))
    } catch (error) {
      res.status(400).json({ success: false, message: (error as Error).message })
    }
  },

  async login(req: Request, res: Response) {
    const { email, password } = req.body as { email: string; password: string }
    try {
      const auth = await authService.login(email, password)
      setAuthCookies(res, auth.accessToken, auth.refreshToken)
      res.json(sendSuccess('Login successful', auth))
    } catch (error) {
      res.status(401).json({ success: false, message: (error as Error).message })
    }
  },

  async refresh(req: Request, res: Response) {
    const refreshToken =
      (req as Request & { cookies?: Record<string, string> }).cookies?.reaxorium_refresh_token ??
      (req.body as { refreshToken?: string } | undefined)?.refreshToken
    if (!refreshToken) {
      return res.status(401).json({ success: false, message: 'Refresh token is required' })
    }

    try {
      const auth = await authService.refresh(refreshToken)
      setAuthCookies(res, auth.accessToken, auth.refreshToken)
      res.json(sendSuccess('Session refreshed', auth))
    } catch (error) {
      res.status(401).json({ success: false, message: (error as Error).message })
    }
  },

  async verifyOtp(req: Request, res: Response) {
    const { email, otp, purpose } = req.body as {
      email: string
      otp: string
      purpose: 'email_verification' | 'reset_password'
    }
    try {
      const result = await authService.verifyOtp(email, otp, purpose)
      res.json(sendSuccess('OTP verified successfully', result))
    } catch (error) {
      res.status(400).json({ success: false, message: (error as Error).message })
    }
  },

  async forgotPassword(req: Request, res: Response) {
    const { email } = req.body as { email: string }
    const result = await authService.requestForgotPassword(email)
    res.json(sendSuccess('Password reset OTP generated', result))
  },

  async resetPassword(req: Request, res: Response) {
    const { email, otp, newPassword } = req.body as { email: string; otp: string; newPassword: string }
    try {
      const result = await authService.resetPassword(email, otp, newPassword)
      res.json(sendSuccess('Password reset successful', result))
    } catch (error) {
      res.status(400).json({ success: false, message: (error as Error).message })
    }
  },

  async logout(req: AuthenticatedRequest, res: Response) {
    if (req.user) {
      await authService.logout(req.user.userId)
    }
    res.clearCookie('reaxorium_access_token')
    res.clearCookie('reaxorium_refresh_token')
    res.json(sendSuccess('Logout successful', { logout: true }))
  }
}
