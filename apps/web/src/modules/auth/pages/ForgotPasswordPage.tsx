import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthShell } from '../components/AuthShell'
import { authService } from '../services/auth.service'
import { OtpVerificationModal } from '../components/OtpVerificationModal'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    try {
      const result = await authService.forgotPassword(email)
      setOtp(result.resetOtp || '')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Forgot Password" subtitle="Generate OTP reset token for your laboratory account.">
      <form onSubmit={onSubmit} className="space-y-4">
        <input className="app-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="w-full rounded-xl bg-primary-container px-4 py-3 font-semibold text-on-primary-container">{loading ? 'Generating OTP...' : 'Send OTP'}</button>
      </form>
      <p className="mt-4 text-sm text-on-surface-variant">
        <Link to="/auth/login" className="text-primary hover:underline">Back to login</Link>
      </p>
      <OtpVerificationModal
        open={Boolean(otp)}
        otp={otp}
        title="Reset OTP"
        onClose={() => navigate('/auth/reset-password', { state: { email } })}
      />
    </AuthShell>
  )
}
