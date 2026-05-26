"use client";

import Link from 'next/link'
import { ArrowSVG } from '@/components/layout/Navbar'

// ── Editable ──
const partners = [
  { name:'Partner 1', logo:'/img/partners/1.svg' },
  { name:'Partner 2', logo:'/img/partners/2.svg' },
  { name:'Partner 3', logo:'/img/partners/3.svg' },
  { name:'Partner 4', logo:'/img/partners/4.svg' },
  { name:'Partner 5', logo:'/img/partners/5.svg' },
  { name:'Partner 6', logo:'/img/partners/6.svg' },
]

const stats = [
  { number:'120+', label:'Projects Completed' },
  { number:'98%',  label:'Client Satisfaction' },
  { number:'8+',   label:'Years Experience'    },
  { number:'40+',  label:'Happy Clients'       },
]

export default function Partners() {
  return (
    <section className="mil-dark-bg mil-p-120-120">
      <div className="mi-invert-fix">
        <div className="container">
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-6">
              <span className="mil-suptitle mil-upper mil-light-soft mil-up mil-mb-30">Trusted By</span>
              <h2 className="mil-muted mil-up mil-mb-30">Our <span className="mil-thin">Partners</span></h2>
            </div>
            <div className="col-lg-6">
              <div className="mil-up" style={{display:'flex',justifyContent:'flex-end'}}>
                <Link href="/contact" className="mil-button mil-arrow-place"><span>Work with us</span><ArrowSVG /></Link>
              </div>
            </div>
          </div>

          {/* Partners grid */}
          <div className="mil-partners-grid mil-up" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',borderTop:'1px solid rgba(255,255,255,0.08)',borderLeft:'1px solid rgba(255,255,255,0.08)'}}>
            {partners.map((p) => (
              <div key={p.name} className="mil-partner-cell" style={{padding:'50px 40px',display:'flex',alignItems:'center',justifyContent:'center',borderRight:'1px solid rgba(255,255,255,0.08)',borderBottom:'1px solid rgba(255,255,255,0.08)',transition:'background 0.3s'}}>
                <img src={p.logo} alt={p.name} style={{maxHeight:40,maxWidth:140,opacity:0.4,filter:'brightness(10)',transition:'opacity 0.3s'}} />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mil-stats-grid mil-up" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',marginTop:90,borderTop:'1px solid rgba(255,255,255,0.08)'}}>
            {stats.map((s,i) => (
              <div key={s.label} style={{padding:'60px 30px',borderRight:i<3?'1px solid rgba(255,255,255,0.08)':'none',textAlign:'center'}}>
                <h2 className="mil-accent" style={{marginBottom:10}}>{s.number}</h2>
                <p className="mil-light-soft mil-upper" style={{fontSize:12,letterSpacing:2,fontWeight:500}}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width:992px) { .mil-partner-cell { padding: 35px 20px !important; } }
        @media (max-width:768px) {
          .mil-partners-grid { grid-template-columns: repeat(2,1fr) !important; }
          .mil-stats-grid    { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width:480px) {
          .mil-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .mil-stats-grid > div { border-right: none !important; }
        }
        .mil-partner-cell:hover img { opacity: 0.8 !important; }
      `}</style>
    </section>
  )
}
