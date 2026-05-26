import { client, ALL_PROJECTS_QUERY } from '@/lib/sanity'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata = { title: 'Portfolio — Nate Danbury', description: 'Browse all projects by Nate Danbury.' }
export const revalidate = 60

export default async function PortfolioPage() {
  let projects: any[] = []
  try { projects = await client.fetch(ALL_PROJECTS_QUERY) } catch {}
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
                <li><a href="/portfolio">Portfolio</a></li>
              </ul>
              <h1 className="mil-muted mil-mb-30">Our <span className="mil-thin">Works</span></h1>
              <p className="mil-light-soft" style={{ maxWidth: 520 }}>
                A curated selection of projects spanning branding, web development, motion design, and app development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mil-p-120-120">
        <div className="container">
          <PortfolioGrid projects={projects} />
        </div>
      </section>
    </>
  )
}
