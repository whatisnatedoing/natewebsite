'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowSVG } from '@/components/layout/Navbar'

const CATS = ['All','Branding','Web','Product','Process','Design Career','Case Study']

function formatDate(s:string) { try { return new Date(s).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}) } catch { return s } }

type Post = { _id:string; title:string; slug:{current:string}; category:string; readTime?:string; publishedAt?:string; excerpt?:string; cover:string }

function BlogCard({ post, featured }:{ post:Post; featured?:boolean }) {
  return (
    <Link href={`/blog/${post.slug.current}`} className="mil-blog-card mil-up" style={{display:'block'}}>
      <div style={{position:'relative',overflow:'hidden',borderRadius:8}}>
        <div style={{paddingBottom:featured?'55%':'65%',position:'relative',overflow:'hidden'}}>
          <img src={post.cover} alt={post.title} loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.6s cubic-bezier(0,0,0.36,1)'}} />
        </div>
        <div className="mil-tag-row">
          {post.category && <span className="mil-tag mil-accent">{post.category}</span>}
        </div>
      </div>
      <div style={{padding:'20px 0'}}>
        <div className="mil-meta mil-mb-10">
          {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
          {post.readTime    && <><span>·</span><span>{post.readTime}</span></>}
        </div>
        <h4 className="mil-mb-10" style={{fontSize:featured?24:20}}>{post.title}</h4>
        {post.excerpt && <p style={{fontSize:14,color:'rgba(0,0,0,0.5)',marginBottom:12,lineHeight:'160%'}}>{post.excerpt}</p>}
        <span className="mil-link mil-dark mil-upper" style={{fontSize:12}}><span>Read more</span><ArrowSVG dark /></span>
      </div>
    </Link>
  )
}

function SearchBar() {
  return (
    <div className="mil-search-wrap mil-up" style={{marginTop:30}}>
      <div className="mil-search">
        <input type="text" placeholder="Search articles..." readOnly style={{cursor:'default',border:'1px solid rgba(255,255,255,0.2)',background:'rgba(255,255,255,0.06)',color:'#fff'}} />
        <i className="fas fa-search" style={{color:'rgba(255,255,255,0.3)'}}></i>
      </div>
    </div>
  )
}

export default function BlogClientPage({ posts }:{ posts:Post[] }) {
  const [search, setSearch]  = useState('')
  const [active, setActive]  = useState('All')

  const filtered = posts.filter(p => {
    const mc = active==='All' || p.category===active
    const ms = p.title.toLowerCase().includes(search.toLowerCase()) || (p.excerpt||'').toLowerCase().includes(search.toLowerCase())
    return mc && ms
  })

  const featured = filtered.slice(0,2)
  const rest     = filtered.slice(2)

  return (
    <>
      {/* Search + chips */}
      <div className="mil-up mil-mb-60">
        <div style={{display:'flex',flexWrap:'wrap',gap:20,alignItems:'center',marginBottom:20}}>
          <div className="mil-search" style={{maxWidth:320}}>
            <input type="text" placeholder="Search articles..." value={search} onChange={e=>setSearch(e.target.value)} style={{border:'1px solid rgba(0,0,0,0.15)',background:'#fff',color:'rgb(0,0,0)',width:'100%'}} />
            <i className="fas fa-search" style={{color:'rgba(0,0,0,0.3)'}}></i>
          </div>
        </div>
        <div className="mil-chips">
          {CATS.map(c=>(
            <button key={c} onClick={()=>setActive(c)}
              className={`mil-chip ${active===c?'mil-active':''}`}
              style={{background:active===c?'var(--accent)':'transparent',borderColor:active===c?'var(--accent)':'rgba(0,0,0,0.15)',color:active===c?'#000':'rgba(0,0,0,0.5)',cursor:'pointer',fontFamily:'inherit'}}
            >{c}</button>
          ))}
        </div>
      </div>

      {filtered.length===0 && <div style={{padding:'60px 0',textAlign:'center',color:'rgba(0,0,0,0.35)'}}>No articles found matching your search.</div>}

      {featured.length>0 && <div className="mil-featured mil-mb-30">{featured.map(p=><BlogCard key={p._id} post={p} featured />)}</div>}

      {rest.length>0 && (
        <div className="mil-blog-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:30}}>
          {rest.map(p=><BlogCard key={p._id} post={p} />)}
        </div>
      )}

    </>
  )
}

BlogClientPage.SearchBar = SearchBar
