import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../../modules/auth/store/auth.store'
import type { UserRole } from '../../modules/auth/types'

interface ProtectedRouteProps {
  allowedRoles: UserRole[]
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const role = useAuthStore((s) => s.role)
  const accessToken = useAuthStore((s) => s.accessToken)
  const isBootstrapping = useAuthStore((s) => s.isBootstrapping)

  if (isBootstrapping) {
    return <div className="p-8 text-center text-on-surface-variant">Initializing laboratory session...</div>
  }
  if (!accessToken || !role) {
    return <Navigate to="/auth/login" replace />
  }
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
