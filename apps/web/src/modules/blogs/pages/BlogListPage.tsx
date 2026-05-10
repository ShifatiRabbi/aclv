import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogApi } from '../blog.service'
import type { BlogItem } from '../types'

function pickBnTitle(item: BlogItem) {
  return item.title_bn ?? item.title ?? item.title_en ?? 'শিরোনামহীন'
}

function pickBnExcerpt(item: BlogItem) {
  return item.excerpt_bn ?? item.excerpt ?? item.excerpt_en ?? ''
}

function pickBnCategory(item: BlogItem) {
  return item.category_bn ?? item.category ?? item.category_en ?? 'রসায়ন'
}

export default function BlogListPage() {
  const [items, setItems] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'রসায়ন বিষয়ক ব্লগ | Reaxorium'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'রসায়ন শিক্ষা, ল্যাব ও খবর — বাংলায় পড়ুন। রিসার্চ-গ্রেড ভার্চুয়াল ল্যাব প্ল্যাটফর্মের জন্য তৈরি।'
      )
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
          setError('ব্লগ লোড করা যায়নি। কিছুক্ষণ পরে আবার চেষ্টা করুন।')
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
    return (
      <div className="max-w-6xl mx-auto p-6 text-on-surface-variant" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
        ব্লগ লোড হচ্ছে...
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-red-400" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
        {error}
      </div>
    )
  }

  return (
    <section className="relative max-w-6xl mx-auto px-6 pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary-container/15 to-transparent blur-3xl opacity-70" />
      <header className="mb-10 relative">
        <p className="text-xs uppercase tracking-widest text-primary-container">Reaxorium Chemistry Journal</p>
        <h1
          className="text-3xl md:text-4xl text-white font-bold mt-2"
          style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}
        >
          রসায়ন শিক্ষা ও ল্যাব ডায়েরি
        </h1>
        <p className="text-on-surface-variant mt-3 max-w-2xl" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
          খবর, ধারণা ও ল্যাব-ফোকাসড ব্যাখ্যা — বাংলায়। প্রতিটি লেখা শিক্ষার্থী ও সিমুলেশন ব্যবহারকারীদের কথা মাথায় রেখে তৈরি।
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 relative">
        {items.map((item) => (
          <article
            key={item._id}
            className="rounded-2xl overflow-hidden border border-white/10 bg-surface-container-low/80 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img src={item.featuredImage} alt={pickBnTitle(item)} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1 text-[11px] uppercase tracking-wide text-primary-container border border-white/10">
                {item.contentSource === 'chemistry_news' ? 'খবর' : 'শিক্ষণীয়'}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-primary-container">{pickBnCategory(item)}</p>
              <h2 className="text-xl text-white mt-2 leading-snug" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
                {pickBnTitle(item)}
              </h2>
              <p className="text-on-surface-variant mt-3 line-clamp-3" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
                {pickBnExcerpt(item)}
              </p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-xs text-on-surface-variant" style={{ fontFamily: "'Noto Sans Bengali', system-ui, sans-serif" }}>
                  {item.sourceName ?? 'সম্পাদকীয়'}
                  {item.elementSymbol ? ` · ${item.elementSymbol}` : ''}
                </span>
                <Link to={`/blog/${item.slug}`} className="text-primary-container hover:underline text-sm font-semibold">
                  পড়ুন →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
