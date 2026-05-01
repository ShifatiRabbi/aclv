import { api } from '../../../shared/utils/api'
import type { AuthSession } from '../types'

type RegisterRole = 'student' | 'teacher'

export const authService = {
  login(payload: { email: string; password: string }) {
    return api.post<{ data: AuthSession }>('/auth/login', payload).then((res) => res.data.data)
  },
  register(payload: {
    name: string
    username: string
    email: string
    password: string
    role: RegisterRole
    institution?: string
    qualification?: string
    subjectExpertise?: string
    classLevel?: string
    referralCode?: string
    promoCode?: string
  }) {
    return api.post('/auth/register', payload).then((res) => res.data.data as { verificationOtp: string })
  },
  refresh() {
    return api.post<{ data: Pick<AuthSession, 'accessToken' | 'refreshToken' | 'role'> }>('/auth/refresh').then((res) => res.data.data)
  },
  verifyOtp(payload: { email: string; otp: string; purpose: 'email_verification' | 'reset_password' }) {
    return api.post('/auth/verify-otp', payload).then((res) => res.data.data)
  },
  forgotPassword(email: string) {
    return api.post('/auth/forgot-password', { email }).then((res) => res.data.data as { resetOtp?: string })
  },
  resetPassword(payload: { email: string; otp: string; newPassword: string }) {
    return api.post('/auth/reset-password', payload).then((res) => res.data.data)
  },
  logout() {
    return api.post('/auth/logout').then((res) => res.data.data)
  }
}
