import { motion, AnimatePresence } from 'motion/react'

interface OtpVerificationModalProps {
  open: boolean
  title?: string
  otp: string
  onClose: () => void
}

export function OtpVerificationModal({ open, title = 'OTP Generated', otp, onClose }: OtpVerificationModalProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            className="glass-panel w-full max-w-md rounded-2xl border border-white/10 p-6"
          >
            <p className="text-lg font-semibold text-white">{title}</p>
            <p className="mt-2 text-sm text-on-surface-variant">Use this OTP to verify your account/session in development.</p>
            <div className="mt-4 rounded-xl border border-primary-container/60 bg-primary-container/15 px-4 py-3 text-center text-2xl tracking-[0.4em] text-primary">
              {otp}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 w-full rounded-xl bg-primary-container px-4 py-3 text-sm font-semibold text-on-primary-container transition hover:brightness-110"
            >
              Continue
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
