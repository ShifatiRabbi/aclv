export type UserRole = 'super_admin' | 'admin' | 'staff' | 'teacher' | 'student'

export interface AuthUser {
  id: string
  name: string
  username: string
  email: string
  role: UserRole
  referralCode?: string
  isEmailVerified: boolean
}

export interface AuthSession {
  accessToken: string
  refreshToken: string
  user: AuthUser
  role: UserRole
}
