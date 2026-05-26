import Link from 'next/link'
import { ArrowSVG } from '@/components/layout/Navbar'

// ── Editable: update services here ──
const services = [
  { id:'01', title:'Brand Identity',    description:'We craft compelling brand identities that tell your story with clarity and impact — from logo design to full visual systems.',     href:'/pricing' },
  { id:'02', title:'Web Design & Dev',  description:'Beautiful, performant websites engineered to convert. We design and build experiences people actually enjoy using.',              href:'/pricing' },
  { id:'03', title:'Motion & Video',    description:'From brand animations to full video production — motion that brings your brand to life and keeps audiences engaged.',             href:'/pricing' },
  { id:'04', title:'App Development',   description:'iOS, Android and cross-platform apps built to scale — combining intuitive UX design with clean, maintainable code.',            href:'/pricing' },
]

export default function Services() {
  return (
    <section className="mil-dark-bg" id="services">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <span className="mil-suptitle mil-upper mil-light-soft mil-up mil-mb-30">What We Do</span>
          <div className="row align-items-center mil-mb-60">
            <div className="col-lg-6">
              <h2 className="mil-muted mil-up mil-mb-30">Services <span className="mil-thin">we offer</span></h2>
            </div>
            <div className="col-lg-6">
              <div className="mil-complex-text mil-up">
                <Link href="/pricing" className="mil-text-image">
                  <img src="/img/team/1.jpg" alt="Nate Danbury" />
                </Link>
                <p className="mil-light-soft">Every great brand starts with a vision. We turn yours into a cohesive, memorable experience that resonates across every touchpoint.</p>
                <Link href="/pricing" className="mil-button mil-arrow-place"><span>Pricing</span><ArrowSVG /></Link>
              </div>
            </div>
          </div>
          <div className="row m-0 mil-services-grid">
            {services.map((s) => (
              <div key={s.id} className="col-lg-3 col-md-6 p-0 mil-services-grid-item">
                <Link href={s.href} className="mil-service-card-sm">
                  <h6 className="mil-upper mil-light-soft mil-mb-30">{s.id}</h6>
                  <h4 className="mil-light mil-mb-30">{s.title}</h4>
                  <p className="mil-light-soft">{s.description}</p>
                  <div style={{marginTop:30}}><span className="mil-link mil-upper"><span>Learn more</span><ArrowSVG /></span></div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
