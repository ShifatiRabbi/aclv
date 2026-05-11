import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { FeedbackPage } from '../types'

interface FeedbackModalProps {
  isOpen: boolean
  defaultPage: FeedbackPage
  onClose: () => void
  onSubmit: (payload: { page: FeedbackPage; description: string; image?: File }) => Promise<void>
}

const PAGES: FeedbackPage[] = ['VLab', 'Chemicals', 'Elements', 'Accessories']

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, defaultPage, onClose, onSubmit }) => {
  const [page, setPage] = React.useState<FeedbackPage>(defaultPage)
  const [description, setDescription] = React.useState('')
  const [image, setImage] = React.useState<File | undefined>()
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const modalRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (isOpen) {
      setPage(defaultPage)
      setError(null)
    }
  }, [defaultPage, isOpen])

  React.useEffect(() => {
    if (!isOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab' || !modalRef.current) return
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const list = Array.from(focusable).filter((el) => !el.hasAttribute('disabled'))
      if (list.length === 0) return
      const first = list[0]
      const last = list[list.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  React.useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus()
    }
  }, [isOpen])

  React.useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  const resetForm = () => {
    setDescription('')
    setImage(undefined)
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
    setError(null)
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) {
      setImage(undefined)
      setPreviewUrl(null)
      return
    }

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('Only JPEG, PNG, or WEBP images are allowed.')
      return
    }

    if (file.size > 1024 * 1024) {
      setError('Image size must be 1 MB or less.')
      return
    }

    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setError(null)
    setImage(file)
    setPreviewUrl(URL.createObjectURL(file))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (description.trim().length < 10) {
      setError('Please provide at least 10 characters in description.')
      return
    }

    try {
      setIsSubmitting(true)
      setError(null)
      await onSubmit({ page, description: description.trim(), image })
      resetForm()
      window.setTimeout(() => onClose(), 450)
    } catch (submissionError: any) {
      setError(submissionError?.response?.data?.message || 'Failed to submit feedback.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            initial={{ scale: 0.96, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            className="relative z-10 w-full max-w-xl rounded-2xl border border-white/15 bg-[#0f1117] p-6 shadow-2xl outline-none"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-1 text-sm text-white/80 hover:bg-white/20"
            >
              X
            </button>
            <h2 className="text-xl font-bold text-white">Help us improve - report issues you are facing</h2>
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/60">Page</label>
                <select
                  value={page}
                  onChange={(e) => setPage(e.target.value as FeedbackPage)}
                  className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-white"
                >
                  {PAGES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/60">Issue Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  required
                  className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-white"
                  placeholder="Describe what happened and how we can reproduce it..."
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/60">Image (optional, max 1 MB)</label>
                <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleFileChange} className="w-full text-xs text-white/70" />
                {previewUrl && <img src={previewUrl} alt="Feedback preview" className="mt-2 max-h-40 rounded-lg border border-white/10" />}
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-black disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                <button type="button" onClick={onClose} className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80">
                  Close
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

