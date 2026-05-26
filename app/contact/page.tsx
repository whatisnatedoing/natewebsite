import ContactForm from '@/components/ui/ContactForm'
import ScrollReveal from '@/components/ui/ScrollReveal'
export const metadata = { title:'Contact — Nate Danbury' }
export default function ContactPage() {
  return (
    <>
      <ScrollReveal />
      <section className="mil-banner mil-inner-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame"><div className="mil-animation mil-position-4"></div></div>
          <div className="mil-gradient"></div>
          <div className="container">
            <div className="mil-banner-content mil-up">
              <ul className="mil-breadcrumbs mil-mb-60"><li><a href="/">Home</a></li><li><a href="/contact">Contact</a></li></ul>
              <h1 className="mil-muted mil-mb-30">Let&apos;s <span className="mil-thin">Talk</span></h1>
              <p className="mil-light-soft" style={{maxWidth:480}}>Have a project in mind? Fill in the form and I&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mil-p-120-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mil-mb-60">
              <span className="mil-suptitle mil-upper mil-suptitle-dark mil-up mil-mb-30">Get In Touch</span>
              <h3 className="mil-up mil-mb-30">Say <span className="mil-thin">hello</span></h3>
              <p className="mil-up mil-mb-60" style={{color:'rgba(0,0,0,0.5)',lineHeight:'180%'}}>Whether you&apos;re ready to start a project or just exploring — I&apos;d love to hear from you.</p>
              {[{icon:'fa-envelope',label:'Email',val:'hello@natedanbury.com',href:'mailto:hello@natedanbury.com'},{icon:'fa-phone',label:'Phone',val:'+1 (555) 000-0000',href:'tel:+15550000000'},{icon:'fa-map-marker-alt',label:'Location',val:'Available Worldwide',href:null}].map(item=>(
                <div key={item.label} className="mil-up mil-mb-30" style={{display:'flex',gap:20,alignItems:'flex-start'}}>
                  <div style={{width:44,height:44,borderRadius:'50%',background:'rgba(0,0,0,0.06)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <i className={`fas ${item.icon}`} style={{fontSize:15,color:'var(--accent)'}}></i>
                  </div>
                  <div>
                    <p style={{fontSize:11,textTransform:'uppercase',letterSpacing:2,fontWeight:500,color:'rgba(0,0,0,0.35)',marginBottom:4}}>{item.label}</p>
                    {item.href?<a href={item.href} style={{fontSize:15,color:'rgb(0,0,0)'}}>{item.val}</a>:<p style={{fontSize:15,color:'rgb(0,0,0)'}}>{item.val}</p>}
                  </div>
                </div>
              ))}
              <div className="mil-up" style={{display:'flex',gap:12,marginTop:40}}>
                {[{href:'https://twitter.com',i:'fa-twitter'},{href:'https://instagram.com',i:'fa-instagram'},{href:'https://linkedin.com',i:'fa-linkedin'},{href:'https://behance.net',i:'fa-behance'}].map(s=>(
                  <a key={s.i} href={s.href} target="_blank" rel="noopener noreferrer" style={{width:40,height:40,borderRadius:'50%',background:'rgba(0,0,0,0.06)',display:'flex',alignItems:'center',justifyContent:'center',color:'rgba(0,0,0,0.5)',fontSize:14,transition:'all 0.2s'}}>
                    <i className={`fab ${s.i}`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-7" style={{marginLeft:'auto'}}><ContactForm /></div>
          </div>
        </div>
      </section>
    </>
  )
}
