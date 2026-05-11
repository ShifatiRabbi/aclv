import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { blogApi } from '../blog.service'
import type { BlogItem } from '../types'

type Lang = 'bn' | 'en'

function pickContent(item: BlogItem, lang: Lang) {
  if (lang === 'bn') {
    return item.content_bn ?? item.content ?? ''
  }
  return item.content_en ?? item.content ?? ''
}

function pickTitle(item: BlogItem, lang: Lang) {
  if (lang === 'bn') {
    return item.title_bn ?? item.title ?? item.title_en ?? ''
  }
  return item.title_en ?? item.title ?? item.title_bn ?? ''
}

function pickExcerptMeta(item: BlogItem, lang: Lang) {
  if (lang === 'bn') {
    return item.metaDescription_bn ?? item.metaDescription ?? item.metaDescription_en ?? ''
  }
  return item.metaDescription_en ?? item.metaDescription ?? item.metaDescription_bn ?? ''
}

function pickCategory(item: BlogItem, lang: Lang) {
  if (lang === 'bn') {
    return item.category_bn ?? item.category ?? item.category_en ?? ''
  }
  return item.category_en ?? item.category ?? item.category_bn ?? ''
}

function pickTags(item: BlogItem, lang: Lang) {
  if (lang === 'bn') {
    return item.tags_bn?.length ? item.tags_bn : item.tags ?? []
  }
  return item.tags_en?.length ? item.tags_en : item.tags ?? []
}

export default function BlogDetailPage() {
  const { slug = '' } = useParams()
  const [item, setItem] = useState<BlogItem | null>(null)
  const [related, setRelated] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [lang, setLang] = useState<Lang>('bn')

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

        const displayTitle = pickTitle(single, 'bn')
        document.title = `${displayTitle} | Reaxorium`
        const meta = document.querySelector('meta[name="description"]')
        if (meta) {
          meta.setAttribute('content', pickExcerptMeta(single, 'bn'))
        }
      } catch {
        if (active) {
          setError('নিবন্ধটি লোড করা যায়নি।')
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

  useEffect(() => {
    if (!item) {
      return
    }
    const displayTitle = pickTitle(item, lang)
    document.title = `${displayTitle} | Reaxorium`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', pickExcerptMeta(item, lang))
    }
  }, [item, lang])

  const canonicalPath = useMemo(() => `/blog/${slug}`, [slug])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-on-surface-variant" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
        লোড হচ্ছে...
      </div>
    )
  }

  if (error || !item) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-red-400" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
        {error || 'নিবন্ধ পাওয়া যায়নি'}
      </div>
    )
  }

  const tags = pickTags(item, lang)
  const bodyFont = lang === 'bn' ? "'Noto Sans Bengali', system-ui, sans-serif" : "'Inter', system-ui, sans-serif"

  return (
    <article className="relative max-w-4xl mx-auto px-6 pb-16">
      <div className="pointer-events-none absolute -top-10 right-0 h-64 w-64 rounded-full bg-primary-container/10 blur-[90px]" />

      <div className="flex flex-wrap items-center justify-between gap-3 relative">
        <p className="text-xs uppercase tracking-widest text-primary-container">{pickCategory(item, lang)}</p>
        <div className="flex rounded-full border border-white/15 bg-black/30 p-1 text-xs">
          <button
            type="button"
            onClick={() => setLang('bn')}
            className={`px-3 py-1 rounded-full transition ${lang === 'bn' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`}
            style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}
          >
            বাংলা
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full transition ${lang === 'en' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'}`}
          >
            English
          </button>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mt-4 relative" style={{ fontFamily: bodyFont }}>
        {pickTitle(item, lang)}
      </h1>
      <p className="mt-3 text-on-surface-variant relative" style={{ fontFamily: bodyFont }}>
        {pickExcerptMeta(item, lang)}
      </p>
      <p className="mt-2 text-xs text-on-surface-variant relative" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
        উৎস: {item.sourceName ?? 'সম্পাদকীয়'}
        {item.elementSymbol ? ` · মৌল: ${item.elementSymbol}` : ''} · Canonical: {canonicalPath}
      </p>

      <img src={item.featuredImage} alt={pickTitle(item, lang)} className="w-full h-[380px] object-cover rounded-2xl mt-6 border border-white/10 relative" />

      <div
        className="prose prose-invert max-w-none mt-8 prose-headings:text-white prose-a:text-primary-container relative"
        style={{ fontFamily: bodyFont }}
        dangerouslySetInnerHTML={{ __html: pickContent(item, lang) }}
      />

      {!!tags.length && (
        <div className="mt-8 flex flex-wrap gap-2 relative">
          {tags.map((tag) => (
            <span key={`${lang}-${tag}`} className="px-3 py-1 rounded-full bg-white/10 text-sm text-on-surface-variant" style={{ fontFamily: bodyFont }}>
              #{tag}
            </span>
          ))}
        </div>
      )}

      {!!related.length && (
        <section className="mt-12 relative">
          <h2 className="text-2xl text-white mb-4" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
            আরও পড়ুন
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((post) => (
              <Link
                key={post._id}
                to={`/blog/${post.slug}`}
                className="block rounded-xl border border-white/10 p-4 hover:bg-white/5 transition"
              >
                <p className="text-white font-medium" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
                  {post.title_bn ?? post.title ?? post.title_en}
                </p>
                <p className="text-xs text-on-surface-variant mt-2 line-clamp-2" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
                  {post.excerpt_bn ?? post.excerpt ?? post.excerpt_en}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
