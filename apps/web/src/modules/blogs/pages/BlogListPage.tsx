import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogApi } from '../blog.service'
import type { BlogItem } from '../types'

export default function BlogListPage() {
  const [items, setItems] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Blog | Reaxorium'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Latest AI-curated science, technology, and chemistry news from Reaxorium.')
    }
    let active = true

    const run = async () => {
      try {
        const data = await blogApi.list()
        if (active) {
          setItems(data)
        }
      } catch {
        if (active) {
          setError('Failed to load blog articles')
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    run()
    return () => {
      active = false
    }
  }, [])

  if (loading) {
    return <div className="max-w-6xl mx-auto p-6 text-on-surface-variant">Loading blog feed...</div>
  }

  if (error) {
    return <div className="max-w-6xl mx-auto p-6 text-red-400">{error}</div>
  }

  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <header className="mb-8">
        <h1 className="text-3xl text-white font-bold">Latest Lab News & Insights</h1>
        <p className="text-on-surface-variant mt-2">AI-curated science and technology updates from trusted sources.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <article key={item._id} className="rounded-2xl overflow-hidden border border-white/10 bg-surface-container-low">
            <img src={item.featuredImage} alt={item.title} className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-primary-container">{item.category}</p>
              <h2 className="text-xl text-white mt-2">{item.title}</h2>
              <p className="text-on-surface-variant mt-3 line-clamp-3">{item.excerpt}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-on-surface-variant">{item.sourceName ?? 'Editorial'}</span>
                <Link to={`/blog/${item.slug}`} className="text-primary-container hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
