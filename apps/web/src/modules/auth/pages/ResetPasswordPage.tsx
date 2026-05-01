import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthShell } from '../components/AuthShell'
import { authService } from '../services/auth.service'

export default function ResetPasswordPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState((location.state as { email?: string } | null)?.email || '')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    try {
      await authService.resetPassword({ email, otp, newPassword })
      setMessage('Password reset successful. Redirecting to login...')
      window.setTimeout(() => navigate('/auth/login'), 1200)
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Reset Password" subtitle="Use OTP verification to set a new secure password.">
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="app-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="app-input" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        <input className="app-input" type="password" placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        {message ? <p className="text-sm text-green-300">{message}</p> : null}
        <button className="w-full rounded-xl bg-primary-container px-4 py-3 font-semibold text-on-primary-container">{loading ? 'Updating...' : 'Reset Password'}</button>
      </form>
      <p className="mt-4 text-sm text-on-surface-variant">
        <Link to="/auth/login" className="text-primary hover:underline">Back to login</Link>
      </p>
    </AuthShell>
  )
}
