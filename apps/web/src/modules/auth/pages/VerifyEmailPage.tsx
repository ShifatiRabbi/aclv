import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthShell } from '../components/AuthShell'
import { authService } from '../services/auth.service'

export default function VerifyEmailPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState((location.state as { email?: string } | null)?.email || '')
  const [otp, setOtp] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await authService.verifyOtp({ email, otp, purpose: 'email_verification' })
    setMessage('Email verified. Redirecting to login...')
    window.setTimeout(() => navigate('/auth/login'), 1000)
  }

  return (
    <AuthShell title="Verify Email" subtitle="Validate your account with OTP to activate laboratory access.">
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="app-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="app-input" placeholder="6-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
        {message ? <p className="text-sm text-green-300">{message}</p> : null}
        <button className="w-full rounded-xl bg-primary-container px-4 py-3 font-semibold text-on-primary-container">Verify Email</button>
      </form>
    </AuthShell>
  )
}
