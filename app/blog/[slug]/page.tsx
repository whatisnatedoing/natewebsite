import { client, POST_BY_SLUG_QUERY, ALL_POSTS_QUERY, urlFor } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowSVG } from '@/components/layout/Navbar'
export const revalidate = 60

const FALLBACK: Record<string,any> = {
  'minimalist-branding':{ _id:'1', title:'The Power of Minimalist Branding', category:'Branding', readTime:'5 min read', publishedAt:'2025-06-10', cover:'/img/blog/blog-1-cover.jpg', author:'Nate Danbury', excerpt:'How stripping away the noise creates brands that truly resonate.',
    body:[{children:[{text:'Minimalism in branding is not about doing less — it is about doing exactly what is needed and nothing more. The most recognisable brands in the world share one trait: clarity. When a viewer encounters your mark, your typeface, your palette, they should feel something before they think anything.'}]},{children:[{text:'The discipline of restraint forces every design decision to earn its place. A single well-chosen typeface communicates more confidence than a dozen competing fonts. White space is not emptiness — it is breathing room that lets your message land with impact.'}]},{children:[{text:'Start by stripping your concept down to its essential truth. What does this brand stand for in one word? Build outward from that word with intention, and you will create something that lasts.'}]}]},
}

function fmt(s:string) { try { return new Date(s).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'}) } catch { return s } }
function getImg(img:any,fb?:string) { if(img?.asset){try{return urlFor(img).width(1200).url()}catch{}}; return img?.src||fb||'/img/blog/placeholder.jpg' }

export async function generateStaticParams() {
  try { const p=await client.fetch(ALL_POSTS_QUERY); return p.map((x:any)=>({slug:x.slug.current})) } catch { return Object.keys(FALLBACK).map(slug=>({slug})) }
}

export default async function BlogPostPage({ params }:{ params:{slug:string} }) {
  let post:any=null
  try { post=await client.fetch(POST_BY_SLUG_QUERY,{slug:params.slug}) } catch {}
  if (!post) post=FALLBACK[params.slug]
  if (!post) notFound()
  const cover=getImg(post.coverImage,post.cover)

  return (
    <>
      <ScrollReveal />
      <section className="mil-banner mil-inner-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame"><div className="mil-animation mil-position-4"></div></div>
          <div className="mil-gradient"></div>
          <div className="container">
            <div className="mil-banner-content mil-up">
              <ul className="mil-breadcrumbs mil-mb-60"><li><Link href="/">Home</Link></li><li><Link href="/blog">Blog</Link></li><li><a href="#">{post.title}</a></li></ul>
              <div className="row"><div className="col-lg-9">
                <div className="mil-labels mil-mb-30">{post.category&&<span className="mil-label mil-accent mil-upper">{post.category}</span>}{post.readTime&&<span className="mil-label mil-light-soft">{post.readTime}</span>}</div>
                <h1 className="mil-muted mil-mb-30">{post.title}</h1>
                <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
                  {post.author&&<p className="mil-light-soft" style={{fontSize:14}}>By {post.author}</p>}
                  {post.publishedAt&&<p className="mil-light-soft" style={{fontSize:14}}>{fmt(post.publishedAt)}</p>}
                </div>
              </div></div>
            </div>
          </div>
        </div>
      </section>
      <section style={{maxHeight:560,overflow:'hidden'}}>
        <img src={cover} alt={post.title} style={{width:'100%',height:560,objectFit:'cover'}} />
      </section>
      <section className="mil-p-120-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {post.excerpt&&<p className="mil-up mil-mb-60" style={{fontSize:20,lineHeight:'170%',color:'rgba(0,0,0,0.7)',borderLeft:'3px solid var(--accent)',paddingLeft:24}}>{post.excerpt}</p>}
              <div className="mil-up">
                {post.body?.map((block:any,i:number)=>{
                  if(block._type==='image'){return<img key={i} src={getImg(block)} alt={block.alt||''} style={{width:'100%',borderRadius:8,marginBottom:30}} loading="lazy" />}
                  const text=block.children?.map((c:any)=>c.text).join('')||''
                  if(!text.trim()) return null
                  return <p key={i} style={{fontSize:16,lineHeight:'190%',color:'rgba(0,0,0,0.65)',marginBottom:24}}>{text}</p>
                })}
              </div>
              <div className="mil-divider mil-dark-divider mil-up" style={{margin:'60px 0'}}></div>
              <div className="mil-up" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:20}}>
                <div><p style={{fontSize:12,textTransform:'uppercase',letterSpacing:2,fontWeight:500,color:'rgba(0,0,0,0.4)',marginBottom:6}}>Written by</p><p style={{fontSize:16,fontWeight:500,color:'rgb(0,0,0)'}}>{post.author||'Nate Danbury'}</p></div>
                <Link href="/blog" className="mil-link mil-dark mil-upper"><span>Back to blog</span><ArrowSVG dark /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mil-dark-bg mil-p-120-120">
        <div className="mi-invert-fix"><div className="container mil-center">
          <span className="mil-suptitle mil-upper mil-light-soft mil-up mil-mb-30">Ready to Start?</span>
          <h2 className="mil-muted mil-up mil-mb-60">Let&apos;s build something <span className="mil-thin">great together.</span></h2>
          <Link href="/contact" className="mil-button mil-arrow-place mil-up"><span>Get in touch</span><ArrowSVG /></Link>
        </div></div>
      </section>
    </>
  )
}
