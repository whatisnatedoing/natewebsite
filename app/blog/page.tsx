import { client, ALL_POSTS_QUERY, urlFor } from '@/lib/sanity'
import BlogClientPage from '@/components/blog/BlogClientPage'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata = { title: 'Blog — Nate Danbury' }
export const revalidate = 60

const FALLBACK_POSTS = [
  { _id:'1', title:'The Power of Minimalist Branding', slug:{current:'minimalist-branding'}, category:'Branding', readTime:'5 min read', publishedAt:'2025-06-10', excerpt:'How stripping away the noise creates brands that truly resonate.', cover:'/img/blog/blog-1-cover.jpg' },
  { _id:'2', title:'Designing for Conversion', slug:{current:'ux-conversion'}, category:'Web', readTime:'7 min read', publishedAt:'2025-05-22', excerpt:'UX principles that turn visitors into customers.', cover:'/img/blog/blog-2-cover.jpg' },
  { _id:'3', title:'Color Theory in Practice', slug:{current:'color-theory'}, category:'Design Career', readTime:'6 min read', publishedAt:'2025-05-01', excerpt:'Choosing a palette that communicates exactly what your brand stands for.', cover:'/img/blog/blog-3-cover.jpg' },
  { _id:'4', title:'Building a Brand From Scratch', slug:{current:'brand-from-scratch'}, category:'Branding', readTime:'9 min read', publishedAt:'2025-04-14', excerpt:'A step-by-step guide to creating a cohesive brand identity.', cover:'/img/blog/blog-4-cover.jpg' },
  { _id:'5', title:'Typography: The Silent Communicator', slug:{current:'typography'}, category:'Process', readTime:'4 min read', publishedAt:'2025-03-30', excerpt:'Why typeface choice is one of the most powerful decisions in brand design.', cover:'/img/blog/blog-5-cover.jpg' },
  { _id:'6', title:'Motion Design in the Age of Scroll', slug:{current:'motion-design'}, category:'Product', readTime:'5 min read', publishedAt:'2025-03-10', excerpt:'Scroll-triggered animation done right — subtle, purposeful, memorable.', cover:'/img/blog/blog-6-cover.jpg' },
]

function normalizePosts(posts: any[]) {
  return posts.map((p) => ({
    ...p,
    cover: p.coverImage?.asset
      ? (() => { try { return urlFor(p.coverImage).width(800).url() } catch { return '/img/blog/placeholder.jpg' } })()
      : (p.cover || '/img/blog/placeholder.jpg'),
  }))
}

export default async function BlogPage() {
  let posts: any[] = []
  try { posts = await client.fetch(ALL_POSTS_QUERY) } catch {}
  const normalized = normalizePosts(posts.length > 0 ? posts : FALLBACK_POSTS)
  return (
    <>
      <ScrollReveal />
      <section className="mil-banner mil-inner-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame"><div className="mil-animation mil-position-4"></div></div>
          <div className="mil-gradient"></div>
          <div className="container">
            <div className="mil-banner-content mil-up">
              <ul className="mil-breadcrumbs mil-mb-60">
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
              <h1 className="mil-muted mil-mb-30">Insights &amp; <span className="mil-thin">Ideas</span></h1>
              <p className="mil-light-soft" style={{ maxWidth: 480 }}>Design thinking, branding strategy, and creative process — straight from the studio.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mil-p-120-120">
        <div className="container">
          <BlogClientPage posts={normalized} />
        </div>
      </section>
    </>
  )
}
