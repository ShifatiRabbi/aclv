import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authService } from '../services/auth.service'
import { useAuthStore } from '../store/auth.store'
import { AuthShell } from '../components/AuthShell'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const setSession = useAuthStore((s) => s.setSession)
  const navigate = useNavigate()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      const auth = await authService.login({ email, password })
      setSession({ accessToken: auth.accessToken, role: auth.role, user: auth.user })
      navigate(`/${auth.role === 'super_admin' ? 'admin' : auth.role}`, { replace: true })
    } catch (submitError) {
      setError((submitError as Error).message || 'Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Secure Login" subtitle="Authenticate into Reaxorium laboratory operating system.">
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="app-input focus:border-primary-container focus:outline-none" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          className="app-input focus:border-primary-container focus:outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <button disabled={loading} className="w-full rounded-xl bg-primary-container px-4 py-3 font-semibold text-on-primary-container">
          {loading ? 'Logging in...' : 'Access Laboratory'}
        </button>
      </form>
      <div className="mt-4 flex items-center justify-between text-sm text-on-surface-variant">
        <Link to="/auth/forgot-password" className="hover:text-primary">Forgot password?</Link>
        <Link to="/auth/register" className="hover:text-primary">Create account</Link>
      </div>
    </AuthShell>
  )
}
