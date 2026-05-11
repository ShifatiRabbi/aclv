import React from 'react'
import { feedbackService } from '../../feedback/services/feedback.service'
import type { FeedbackPage, FeedbackReport, FeedbackStatus } from '../../feedback/types'
import { AnimatePresence, motion } from 'motion/react'

const statusOptions: FeedbackStatus[] = ['open', 'in_progress', 'resolved']
const pageOptions: FeedbackPage[] = ['VLab', 'Chemicals', 'Elements', 'Accessories']

export default function AdminFeedbackPage() {
  const [items, setItems] = React.useState<FeedbackReport[]>([])
  const [loading, setLoading] = React.useState(true)
  const [pageFilter, setPageFilter] = React.useState<FeedbackPage | ''>('')
  const [statusFilter, setStatusFilter] = React.useState<FeedbackStatus | ''>('')
  const [selectedItem, setSelectedItem] = React.useState<FeedbackReport | null>(null)
  const [imageView, setImageView] = React.useState<string | null>(null)
  const [pageNumber, setPageNumber] = React.useState(1)
  const [totalPages, setTotalPages] = React.useState(1)

  const fetchFeedback = React.useCallback(async () => {
    setLoading(true)
    try {
      const response = await feedbackService.listAdmin({ page: pageFilter, status: statusFilter, pageNumber, pageSize: 20 })
      setItems(response.items)
      setTotalPages(response.pagination.totalPages)
    } finally {
      setLoading(false)
    }
  }, [pageFilter, statusFilter, pageNumber])

  React.useEffect(() => {
    void fetchFeedback()
  }, [fetchFeedback])

  const updateStatus = async (id: string, status: FeedbackStatus) => {
    await feedbackService.updateStatus(id, status)
    await fetchFeedback()
  }

  return (
    <section className="space-y-6">
      <div className="glass-panel rounded-2xl border border-white/10 p-6">
        <h1 className="text-2xl font-semibold text-white">User Feedback</h1>
        <p className="mt-2 text-on-surface-variant">Review incoming reports, inspect screenshots, and track resolution progress.</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <select value={pageFilter} onChange={(e) => setPageFilter(e.target.value as FeedbackPage | '')} className="rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm text-white">
          <option value="">All Pages</option>
          {pageOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as FeedbackStatus | '')} className="rounded-lg border border-white/20 bg-black/20 px-3 py-2 text-sm text-white">
          <option value="">All Status</option>
          {statusOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <button onClick={() => void fetchFeedback()} className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-black">
          Refresh
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <div className="grid grid-cols-12 border-b border-white/10 px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-white/50">
          <div className="col-span-2">Page</div>
          <div className="col-span-4">Description</div>
          <div className="col-span-2">Image</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Date</div>
        </div>

        {loading ? (
          <div className="p-6 text-sm text-white/60">Loading feedback...</div>
        ) : (
          items.map((item) => (
            <div key={item._id} className="grid grid-cols-12 items-center border-b border-white/5 px-4 py-3 text-sm text-white/80">
              <div className="col-span-2">{item.page}</div>
              <button onClick={() => setSelectedItem(item)} className="col-span-4 truncate text-left hover:text-orange-300">
                {item.description}
              </button>
              <div className="col-span-2">
                {item.imageUrl ? (
                  <button onClick={() => setImageView(`${import.meta.env.VITE_API_BASE_URL?.replace('/api', '') || 'http://localhost:5000'}${item.imageUrl}`)} className="rounded bg-white/10 px-2 py-1 text-xs hover:bg-white/20">
                    View
                  </button>
                ) : (
                  <span className="text-white/30">No image</span>
                )}
              </div>
              <div className="col-span-2">
                <select value={item.status} onChange={(e) => void updateStatus(item._id, e.target.value as FeedbackStatus)} className="rounded border border-white/20 bg-black/20 px-2 py-1 text-xs text-white">
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-2 text-xs text-white/50">{new Date(item.createdAt).toLocaleString()}</div>
            </div>
          ))
        )}
      </div>

      <div className="flex items-center justify-end gap-2">
        <button disabled={pageNumber <= 1} onClick={() => setPageNumber((p) => Math.max(1, p - 1))} className="rounded border border-white/20 px-3 py-1 text-sm text-white disabled:opacity-40">
          Prev
        </button>
        <span className="text-sm text-white/60">
          {pageNumber} / {totalPages}
        </span>
        <button disabled={pageNumber >= totalPages} onClick={() => setPageNumber((p) => Math.min(totalPages, p + 1))} className="rounded border border-white/20 px-3 py-1 text-sm text-white disabled:opacity-40">
          Next
        </button>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/70" onClick={() => setSelectedItem(null)} />
            <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} className="relative z-10 w-full max-w-2xl rounded-xl border border-white/10 bg-[#11131a] p-5">
              <h3 className="text-lg font-semibold text-white">Feedback Detail</h3>
              <p className="mt-3 text-sm text-white/80 whitespace-pre-wrap">{selectedItem.description}</p>
            </motion.div>
          </div>
        )}
        {imageView && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80" onClick={() => setImageView(null)} />
            <motion.img initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} src={imageView} alt="Feedback attachment" className="relative z-10 max-h-[80vh] max-w-[90vw] rounded-xl border border-white/20" />
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

