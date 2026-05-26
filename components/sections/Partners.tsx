import Link from 'next/link'
import { ArrowSVG } from '@/components/layout/Navbar'

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
              <div className="mil-up" style={{ display:'flex', justifyContent:'flex-end' }}>
                <Link href="/contact" className="mil-button mil-arrow-place"><span>Work with us</span><ArrowSVG /></Link>
              </div>
            </div>
          </div>
          <div className="mil-partners-grid mil-up">
            {partners.map(p => (
              <div key={p.name} className="mil-partner-cell">
                <img src={p.logo} alt={p.name} />
              </div>
            ))}
          </div>
          <div className="mil-stats-grid mil-up">
            {stats.map(s => (
              <div key={s.label} className="mil-stat-cell">
                <h2 className="mil-accent" style={{ marginBottom:10 }}>{s.number}</h2>
                <p className="mil-light-soft mil-upper" style={{ fontSize:12, letterSpacing:2, fontWeight:500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
