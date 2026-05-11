import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthShell } from '../components/AuthShell'
import { authService } from '../services/auth.service'
import { OtpVerificationModal } from '../components/OtpVerificationModal'

type RegisterRole = 'student' | 'teacher'

export default function RegisterPage() {
  const navigate = useNavigate()
  const [role, setRole] = useState<RegisterRole>('student')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [otp, setOtp] = useState('')
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    institution: '',
    qualification: '',
    subjectExpertise: '',
    classLevel: '',
    referralCode: '',
    promoCode: ''
  })

  const setField = (key: keyof typeof form, value: string) => setForm((prev) => ({ ...prev, [key]: value }))

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    try {
      const result = await authService.register({ ...form, role })
      setOtp(result.verificationOtp)
    } catch (submitError) {
      setError((submitError as Error).message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Create Account" subtitle="Only Student and Teacher accounts can self-register.">
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-black/20 p-1">
          <button type="button" onClick={() => setRole('student')} className={`rounded-lg py-2 text-sm ${role === 'student' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`}>Student</button>
          <button type="button" onClick={() => setRole('teacher')} className={`rounded-lg py-2 text-sm ${role === 'teacher' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`}>Teacher</button>
        </div>
        <input className="app-input" placeholder="Full name" value={form.name} onChange={(e) => setField('name', e.target.value)} />
        <input className="app-input" placeholder="Username" value={form.username} onChange={(e) => setField('username', e.target.value)} />
        <input className="app-input" placeholder="Email" value={form.email} onChange={(e) => setField('email', e.target.value)} />
        <input className="app-input" type="password" placeholder="Password" value={form.password} onChange={(e) => setField('password', e.target.value)} />
        <input className="app-input" placeholder="Institution" value={form.institution} onChange={(e) => setField('institution', e.target.value)} />
        {role === 'teacher' ? (
          <>
            <input className="app-input" placeholder="Qualification" value={form.qualification} onChange={(e) => setField('qualification', e.target.value)} />
            <input className="app-input" placeholder="Subject expertise" value={form.subjectExpertise} onChange={(e) => setField('subjectExpertise', e.target.value)} />
          </>
        ) : (
          <input className="app-input" placeholder="Class / Level" value={form.classLevel} onChange={(e) => setField('classLevel', e.target.value)} />
        )}
        <div className="grid grid-cols-2 gap-3">
          <input className="app-input" placeholder="Referral code" value={form.referralCode} onChange={(e) => setField('referralCode', e.target.value)} />
          <input className="app-input" placeholder="Promo code" value={form.promoCode} onChange={(e) => setField('promoCode', e.target.value)} />
        </div>
        {error ? <p className="text-sm text-red-300">{error}</p> : null}
        <button disabled={loading} className="w-full rounded-xl bg-primary-container px-4 py-3 font-semibold text-on-primary-container">{loading ? 'Creating account...' : 'Create Account'}</button>
      </form>
      <p className="mt-4 text-sm text-on-surface-variant">
        Already have access? <Link className="text-primary hover:underline" to="/auth/login">Login</Link>
      </p>
      <OtpVerificationModal open={Boolean(otp)} otp={otp} onClose={() => navigate('/auth/verify-email', { state: { email: form.email } })} />
    </AuthShell>
  )
}
