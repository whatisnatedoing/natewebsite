'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  category: string
  readTime: string
  publishedAt: string
  excerpt: string
  coverImage: string
}

interface Props {
  posts: Post[]
}

const chips = ['All', 'Branding', 'Web', 'Product', 'Process', 'Design Career', 'Case Study']

export default function BlogClientFilter({ posts }: Props) {
  const [activeChip, setActiveChip] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchCat = activeChip === 'All' || post.category === activeChip
      const matchSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [posts, activeChip, search])

  const featured = filtered.slice(0, 2)
  const rest     = filtered.slice(2)

  return (
    <section className="mil-p-120-120" style={{ background: '#fff' }}>
      <div className="container">

        {/* Category chips */}
        <div className="mil-chips mil-up mil-mb-60">
          {chips.map((chip) => (
            <button
              key={chip}
              className={`mil-chip ${activeChip === chip ? 'mil-active' : ''}`}
              onClick={() => setActiveChip(chip)}
              style={{
                cursor: 'pointer',
                border: '1px solid rgba(0,0,0,0.15)',
                background: activeChip === chip ? 'var(--accent)' : 'transparent',
                color: activeChip === chip ? '#000' : 'rgba(0,0,0,0.5)',
                borderColor: activeChip === chip ? 'var(--accent)' : 'rgba(0,0,0,0.15)',
                fontFamily: 'inherit',
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Search bar (visible on scroll into section, synced with banner search) */}
        <div className="mil-up mil-mb-60" style={{ maxWidth: 400, position: 'relative' }}>
          <input
            type="search"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              height: 50,
              padding: '0 40px 0 20px',
              borderRadius: 30,
              border: '1px solid rgba(0,0,0,0.15)',
              background: 'transparent',
              fontFamily: 'inherit',
              fontSize: 13,
              color: 'rgba(0,0,0,0.8)',
              outline: 'none',
            }}
          />
          <i className="fas fa-search" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: 'rgba(0,0,0,0.3)' }}></i>
        </div>

        {/* Featured 2-up */}
        {featured.length > 0 && (
          <div className="mil-featured mil-up mil-mb-60">
            {featured.map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        )}

        {/* Rest grid */}
        <div className="row">
          {rest.map((post) => (
            <div key={post.slug} className="col-lg-4 col-md-6 mil-up mil-mb-60">
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(0,0,0,0.3)' }}>
            <p>No articles found. Try a different search or category.</p>
          </div>
        )}

      </div>
    </section>
  )
}

function BlogCard({ post, featured }: { post: Post; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="mil-blog-card" style={{ display: 'block' }}>
      <div className="mil-cover-frame" style={{ position: 'relative' }}>
        <div className="mil-cover" style={{ paddingBottom: featured ? '55%' : '65%', position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
          <img
            src={post.coverImage}
            alt={post.title}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0,0,0.3642,1)' }}
          />
        </div>
        <div className="mil-tag-row">
          <span className="mil-tag mil-accent">{post.category}</span>
        </div>
      </div>
      <div className="mil-descr">
        <h4 style={{ fontSize: featured ? 22 : 18, fontWeight: 500, marginBottom: 10 }}>{post.title}</h4>
        {post.excerpt && (
          <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.5)', marginBottom: 12, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            {post.excerpt}
          </p>
        )}
        <div className="mil-meta">
          <span>{post.publishedAt}</span>
          {post.readTime && <><span>·</span><span>{post.readTime}</span></>}
        </div>
      </div>
    </Link>
  )
}
