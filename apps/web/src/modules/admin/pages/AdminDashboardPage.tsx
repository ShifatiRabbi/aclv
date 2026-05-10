import { NeonStatCard } from '../../dashboard/components/NeonStatCard'
import { useEffect, useState } from 'react'
import { blogApi } from '../../blogs/blog.service'
import type { BlogItem } from '../../blogs/types'

export default function AdminDashboardPage() {
  const [blogs, setBlogs] = useState<BlogItem[]>([])
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')

  const loadBlogs = async () => {
    const items = await blogApi.list(true)
    setBlogs(items)
  }

  useEffect(() => {
    loadBlogs().catch(() => {
      setMessage('Failed to load blog moderation queue')
    })
  }, [])

  const runGeneration = async () => {
    setBusy(true)
    setMessage('')
    try {
      await blogApi.generate()
      await loadBlogs()
      setMessage('Auto-generation run completed')
    } catch {
      setMessage('Generation failed')
    } finally {
      setBusy(false)
    }
  }

  const publishBlog = async (id: string) => {
    setBusy(true)
    setMessage('')
    try {
      await blogApi.publish(id)
      await loadBlogs()
      setMessage('Draft published')
    } catch {
      setMessage('Failed to publish draft')
    } finally {
      setBusy(false)
    }
  }

  const deleteBlog = async (id: string) => {
    setBusy(true)
    setMessage('')
    try {
      await blogApi.remove(id)
      await loadBlogs()
      setMessage('Blog deleted')
    } catch {
      setMessage('Delete failed')
    } finally {
      setBusy(false)
    }
  }

  const drafts = blogs.filter((item) => !item.published)

  return (
    <section className="space-y-6">
      <div className="glass-panel rounded-2xl border border-white/10 p-6">
        <h1 className="text-2xl font-semibold text-white">Enterprise Admin Control Center</h1>
        <p className="mt-2 text-on-surface-variant">Manage users, subscriptions, referral analytics, security logs, and audit trails.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <NeonStatCard label="Total Users" value="18,204" hint="+4.3% this month" />
        <NeonStatCard label="Revenue" value="$42,980" hint="Active subscriptions" />
        <NeonStatCard label="Promo Conversions" value="2,940" hint="Campaign efficiency high" />
        <NeonStatCard label="Security Events" value="12" hint="All monitored and resolved" />
      </div>

      <div className="glass-panel rounded-2xl border border-white/10 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl text-white font-semibold">Chemistry AI Publishing</h2>
            <p className="text-on-surface-variant mt-1">
              Hybrid run: chemistry news (when available) → educational fallback from your periodic table data. Drafts default Bangla-first.
            </p>
          </div>
          <button
            type="button"
            onClick={runGeneration}
            disabled={busy}
            className="rounded-full px-5 py-2.5 bg-primary-container text-on-primary-container disabled:opacity-60"
          >
            {busy ? 'Processing...' : 'Run generation'}
          </button>
        </div>

        {!!message && <p className="mt-3 text-sm text-on-surface-variant">{message}</p>}

        <div className="mt-6 space-y-3">
          {drafts.length === 0 && <p className="text-on-surface-variant">No drafts pending review.</p>}
          {drafts.map((item) => (
            <div key={item._id} className="rounded-xl border border-white/10 p-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-white" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
                  {item.title_bn ?? item.title ?? item.title_en}
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                  {(item.category_bn ?? item.category ?? item.category_en) || '—'} · {item.contentSource ?? 'unknown'}
                  {item.topicKey ? ` · ${item.topicKey}` : ''}
                </p>
                {item.title_en && (
                  <p className="text-xs text-on-surface-variant mt-1 opacity-80">EN: {item.title_en}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => publishBlog(item._id)}
                  disabled={busy}
                  className="rounded-full px-4 py-2 bg-emerald-500/20 text-emerald-300 disabled:opacity-60"
                >
                  Publish
                </button>
                <button
                  type="button"
                  onClick={() => deleteBlog(item._id)}
                  disabled={busy}
                  className="rounded-full px-4 py-2 bg-red-500/20 text-red-300 disabled:opacity-60"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
