'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowSVG } from '@/components/layout/Navbar'

const FALLBACK: any[] = [
  { _id:'1', slug:{current:'curatedbyzee'}, title:'Curated by Zee',   category:'branding',        categoryLabel:'Fashion',        cover:'/img/works/1.jpg', shortDescription:'Brand identity for a luxury fashion curation platform.' },
  { _id:'2', slug:{current:'project-2'},    title:'Digital Presence',  category:'web-development', categoryLabel:'Tech',           cover:'/img/works/2.jpg', shortDescription:'Full-stack website for a growing tech startup.' },
  { _id:'3', slug:{current:'project-3'},    title:'Visual Identity',   category:'design',          categoryLabel:'Lifestyle',      cover:'/img/works/3.jpg', shortDescription:'Complete visual rebrand for a wellness lifestyle brand.' },
  { _id:'4', slug:{current:'project-4'},    title:'App Experience',    category:'programming',     categoryLabel:'Music Business', cover:'/img/works/4.jpg', shortDescription:'Cross-platform app for a music management company.' },
  { _id:'5', slug:{current:'project-5'},    title:'Brand Refresh',     category:'branding',        categoryLabel:'Beauty',         cover:'/img/works/5.jpg', shortDescription:'Modernised identity for an established beauty brand.' },
  { _id:'6', slug:{current:'project-6'},    title:'E-Commerce Build',  category:'web-development', categoryLabel:'Retail',         cover:'/img/works/6.jpg', shortDescription:'Custom Shopify storefront for a premium retail brand.' },
]

const CATS = [
  { slug:'all',             label:'All'             },
  { slug:'branding',        label:'Branding'        },
  { slug:'web-development', label:'Web Development' },
  { slug:'design',          label:'Design'          },
  { slug:'programming',     label:'Programming'     },
]

function getCover(p: any) {
  if (p.coverImage?.asset) { try { const {urlFor} = require('@/lib/sanity'); return urlFor(p.coverImage).width(800).url() } catch {} }
  return p.cover || '/img/works/placeholder.jpg'
}

export default function PortfolioGrid({ projects }: { projects: any[] }) {
  const [active, setActive] = useState('all')
  const data = projects.length > 0 ? projects : FALLBACK
  const filtered = active === 'all' ? data : data.filter(p => p.category === active)

  return (
    <>
      {/* Filter */}
      <div className="mil-up mil-mb-60" style={{display:'flex',flexWrap:'wrap',gap:10}}>
        {CATS.map(c => (
          <button key={c.slug} onClick={()=>setActive(c.slug)}
            style={{
              background: active===c.slug ? 'rgb(0,0,0)' : 'transparent',
              border: `1px solid ${active===c.slug ? 'rgb(0,0,0)' : 'rgba(0,0,0,0.12)'}`,
              borderRadius: 40, padding:'8px 20px', cursor:'pointer',
              color: active===c.slug ? '#fff' : 'rgba(0,0,0,0.4)',
              fontFamily:'inherit', fontSize:12, fontWeight:500, letterSpacing:2,
              textTransform:'uppercase', transition:'all 0.2s',
            }}
          >{c.label}</button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{padding:'60px 0',textAlign:'center',color:'rgba(0,0,0,0.35)'}}>No projects in this category yet.</div>
      )}

      {/* Grid */}
      <div className="mil-pf-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:30}}>
        {filtered.map(p => (
          <Link key={p._id} href={`/portfolio/${p.slug.current}`} className="mil-portfolio-item mil-up" style={{display:'block'}}>
            <div className="mil-cover-frame">
              <div className="mil-cover"><img src={getCover(p)} alt={p.title} loading="lazy" /></div>
            </div>
            <div className="mil-descr">
              <div className="mil-labels mil-mb-10">
                <span className="mil-label mil-accent mil-upper">{p.categoryLabel || p.category}</span>
              </div>
              <h4 className="mil-mb-10">{p.title}</h4>
              {p.shortDescription && <p style={{fontSize:14,color:'rgba(0,0,0,0.5)',lineHeight:'160%',marginBottom:12}}>{p.shortDescription}</p>}
              <span className="mil-link mil-dark mil-upper" style={{fontSize:12}}><span>View project</span><ArrowSVG dark /></span>
            </div>
          </Link>
        ))}
      </div>

    </>
  )
}
