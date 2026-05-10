import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogApi } from '../blog.service'
import type { BlogItem } from '../types'

export default function BlogDetailPage() {
  const { slug = '' } = useParams()
  const [item, setItem] = useState<BlogItem | null>(null)
  const [related, setRelated] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    const run = async () => {
      try {
        const [single, all] = await Promise.all([blogApi.getBySlug(slug), blogApi.list()])
        if (!active) {
          return
        }
        setItem(single)
        setRelated(all.filter((blog) => blog.slug !== single.slug).slice(0, 3))
        document.title = `${single.title} | Reaxorium`
        const meta = document.querySelector('meta[name="description"]')
        if (meta) {
          meta.setAttribute('content', single.metaDescription)
        }
      } catch {
        if (active) {
          setError('Failed to load the blog post')
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
  }, [slug])

  const canonicalPath = useMemo(() => `/blog/${slug}`, [slug])

  if (loading) {
    return <div className="max-w-4xl mx-auto p-6 text-on-surface-variant">Loading article...</div>
  }

  if (error || !item) {
    return <div className="max-w-4xl mx-auto p-6 text-red-400">{error || 'Article not found'}</div>
  }

  return (
    <article className="max-w-4xl mx-auto px-6 pb-16">
      <p className="text-xs uppercase tracking-widest text-primary-container mb-3">{item.category}</p>
      <h1 className="text-4xl font-bold text-white leading-tight">{item.title}</h1>
      <p className="mt-3 text-on-surface-variant">{item.metaDescription}</p>
      <p className="mt-2 text-xs text-on-surface-variant">
        Source: {item.sourceName ?? 'Editorial'} | Canonical URL: {canonicalPath}
      </p>
      <img src={item.featuredImage} alt={item.title} className="w-full h-[380px] object-cover rounded-2xl mt-6" />

      <div
        className="prose prose-invert max-w-none mt-8"
        dangerouslySetInnerHTML={{ __html: item.content }}
      />

      <div className="mt-8 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-sm text-on-surface-variant">
            #{tag}
          </span>
        ))}
      </div>

      {!!related.length && (
        <section className="mt-12">
          <h2 className="text-2xl text-white mb-4">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((post) => (
              <Link key={post._id} to={`/blog/${post.slug}`} className="block rounded-xl border border-white/10 p-4 hover:bg-white/5">
                <p className="text-white font-medium">{post.title}</p>
                <p className="text-xs text-on-surface-variant mt-2 line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
