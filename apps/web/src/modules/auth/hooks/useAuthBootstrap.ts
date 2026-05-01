import { useEffect } from 'react'
import { authService } from '../services/auth.service'
import { useAuthStore } from '../store/auth.store'

export function useAuthBootstrap() {
  const accessToken = useAuthStore((s) => s.accessToken)
  const setBootstrapping = useAuthStore((s) => s.setBootstrapping)
  const clearSession = useAuthStore((s) => s.clearSession)

  useEffect(() => {
    if (!accessToken) {
      setBootstrapping(false)
      return
    }

    authService
      .refresh()
      .catch(() => {
        clearSession()
      })
      .finally(() => {
        setBootstrapping(false)
      })
  }, [accessToken, clearSession, setBootstrapping])
}
