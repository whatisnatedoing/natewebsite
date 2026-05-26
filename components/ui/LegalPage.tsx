import ScrollReveal from '@/components/ui/ScrollReveal'
export default function LegalPage({ title, subtitle, lastUpdated, children }:{ title:string; subtitle:string; lastUpdated:string; children:React.ReactNode }) {
  return (
    <>
      <ScrollReveal />
      <section className="mil-banner mil-inner-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame"><div className="mil-animation mil-position-4"></div></div>
          <div className="mil-gradient"></div>
          <div className="container">
            <div className="mil-banner-content mil-up">
              <ul className="mil-breadcrumbs mil-mb-60"><li><a href="/">Home</a></li><li><a href="#">{title}</a></li></ul>
              <h1 className="mil-muted mil-mb-15">{title}</h1>
              <p className="mil-light-soft">{subtitle}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mil-p-120-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className="mil-up mil-mb-60" style={{fontSize:13,color:'rgba(0,0,0,0.35)',textTransform:'uppercase',letterSpacing:2,fontWeight:500}}>Last updated: {lastUpdated}</p>
              <div className="mil-up mil-legal-content">{children}</div>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .mil-legal-content { font-size:15px; line-height:190%; color:rgba(0,0,0,0.6); }
        .mil-legal-content h4 { font-size:18px; color:rgb(0,0,0); font-weight:500; margin-top:48px; margin-bottom:16px; }
        .mil-legal-content p  { margin-bottom:16px; }
        .mil-legal-content strong { color:rgb(0,0,0); font-weight:500; }
      `}</style>
    </>
  )
}
