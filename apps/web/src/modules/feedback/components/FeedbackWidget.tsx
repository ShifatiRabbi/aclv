import React from 'react'
import { MessageSquareWarning } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { FeedbackModal } from './FeedbackModal'
import { feedbackService } from '../services/feedback.service'
import type { FeedbackPage } from '../types'

const STORAGE_KEY = 'feedback_button_position_v1'
const ANON_KEY = 'feedback_anonymous_id_v1'
const DEFAULT_POS = { x: 24, y: 220 }

function mapPathToPage(pathname: string): FeedbackPage {
  if (pathname.startsWith('/chemicals')) return 'Chemicals'
  if (pathname.startsWith('/elements')) return 'Elements'
  if (pathname.startsWith('/accessories')) return 'Accessories'
  return 'VLab'
}

function getAnonymousId() {
  const existing = localStorage.getItem(ANON_KEY)
  if (existing) return existing
  const created = `anon_${crypto.randomUUID()}`
  localStorage.setItem(ANON_KEY, created)
  return created
}

export const FeedbackWidget: React.FC = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = React.useState(false)
  const [position, setPosition] = React.useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return DEFAULT_POS
    try {
      return JSON.parse(saved)
    } catch {
      return DEFAULT_POS
    }
  })
  const dragRef = React.useRef<{ active: boolean; moved: boolean; offsetX: number; offsetY: number }>({
    active: false,
    moved: false,
    offsetX: 0,
    offsetY: 0
  })
  const saveTimerRef = React.useRef<number | null>(null)

  const persistPosition = React.useCallback((nextPosition: { x: number; y: number }) => {
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current)
    saveTimerRef.current = window.setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPosition))
    }, 120)
  }, [])

  React.useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!dragRef.current.active) return
      const x = Math.max(12, Math.min(window.innerWidth - 220, event.clientX - dragRef.current.offsetX))
      const y = Math.max(12, Math.min(window.innerHeight - 56, event.clientY - dragRef.current.offsetY))
      const next = { x, y }
      dragRef.current.moved = true
      setPosition(next)
      persistPosition(next)
    }

    const onUp = () => {
      dragRef.current.active = false
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current)
    }
  }, [persistPosition])

  const handleSubmit = async (payload: { page: FeedbackPage; description: string; image?: File }) => {
    await feedbackService.submit({
      ...payload,
      anonymousId: getAnonymousId()
    })
  }

  const detectedPage = mapPathToPage(location.pathname)

  return (
    <>
      <button
        type="button"
        onPointerDown={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          dragRef.current = {
            active: true,
            moved: false,
            offsetX: event.clientX - rect.left,
            offsetY: event.clientY - rect.top
          }
        }}
        onClick={() => {
          if (!dragRef.current.moved) setIsOpen(true)
        }}
        className="fixed z-[110] flex items-center gap-2 rounded-full border border-orange-300/40 bg-orange-500 px-4 py-2 text-xs font-bold text-black shadow-xl"
        style={{ left: position.x, top: position.y }}
      >
        <MessageSquareWarning size={16} />
        Feedback & Report Issue
      </button>

      <FeedbackModal isOpen={isOpen} defaultPage={detectedPage} onClose={() => setIsOpen(false)} onSubmit={handleSubmit} />
    </>
  )
}

