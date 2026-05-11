import { create } from 'zustand'
import type { AuthUser, UserRole } from '../types'

interface AuthState {
  accessToken: string | null
  role: UserRole | null
  user: AuthUser | null
  isBootstrapping: boolean
  setSession: (payload: { accessToken: string; role: UserRole; user: AuthUser }) => void
  setBootstrapping: (value: boolean) => void
  clearSession: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem('reaxorium_access_token'),
  role: null,
  user: null,
  isBootstrapping: true,
  setSession: ({ accessToken, role, user }) => {
    localStorage.setItem('reaxorium_access_token', accessToken)
    set({ accessToken, role, user })
  },
  setBootstrapping: (value) => set({ isBootstrapping: value }),
  clearSession: () => {
    localStorage.removeItem('reaxorium_access_token')
    set({ accessToken: null, role: null, user: null })
  }
}))
