import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

export function LegalBanner({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <section className="mil-dark-bg mil-inner-banner">
      <div className="mi-invert-fix">
        <div className="container">
          <div className="mil-banner-content">
            <ul className="mil-breadcrumbs mil-mb-60 mil-up">
              <li><Link href="/">Homepage</Link></li>
              <li><Link href="#">{breadcrumb}</Link></li>
            </ul>
            <h1 className="mil-muted mil-up">
              {title.split(' ').map((word, i, arr) =>
                i === arr.length - 1
                  ? <span key={i} className="mil-thin">{word}</span>
                  : <span key={i}>{word} </span>
              )}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LegalBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="mil-p-120-120" style={{ background: '#fff' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 mil-up">
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h4 style={{ marginBottom: 15 }}>{title}</h4>
      <div style={{ color: 'rgba(0,0,0,0.65)', lineHeight: '175%', fontSize: 15 }}>
        {children}
      </div>
    </div>
  )
}
