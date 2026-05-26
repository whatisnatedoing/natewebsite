import PricingClient from '@/components/pricing/PricingClient'
import ScrollReveal from '@/components/ui/ScrollReveal'
export const metadata = { title:'Pricing — Nate Danbury' }
export default function PricingPage() {
  return (
    <>
      <ScrollReveal />
      <section className="mil-banner mil-inner-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame"><div className="mil-animation mil-position-4"></div></div>
          <div className="mil-gradient"></div>
          <div className="container">
            <div className="mil-banner-content mil-up">
              <ul className="mil-breadcrumbs mil-mb-60"><li><a href="/">Home</a></li><li><a href="/pricing">Pricing</a></li></ul>
              <h1 className="mil-muted mil-mb-30">Simple, <span className="mil-thin">Transparent</span> Pricing</h1>
              <p className="mil-light-soft" style={{maxWidth:520}}>No hidden fees. No surprises. Choose the package that fits your vision and budget.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mil-soft-bg mil-p-120-120"><div className="container"><PricingClient /></div></section>
    </>
  )
}
