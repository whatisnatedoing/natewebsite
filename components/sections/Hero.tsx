import Link from 'next/link'
import { ArrowSVG } from '@/components/layout/Navbar'

export default function Hero() {
  return (
    <section className="mil-banner mil-dark-bg" id="home-hero">
      <div className="mi-invert-fix">
        <div className="mil-animation-frame">
          <div className="mil-animation mil-position-1" style={{background:'radial-gradient(circle,rgba(174,140,111,0.3),transparent)',borderRadius:'50%'}}></div>
          <div className="mil-animation mil-position-2" style={{background:'radial-gradient(circle,rgba(174,140,111,0.15),transparent)',borderRadius:'50%'}}></div>
        </div>
        <div className="mil-gradient"></div>
        <div className="container">
          <div className="mil-banner-content mil-up">
            <h1 className="mil-muted mil-mb-60">
              Designing <span className="mil-thin">a Better</span><br />
              World <span className="mil-thin">Today</span>
            </h1>
            <div className="row">
              <div className="col-md-7 col-lg-5">
                <p className="mil-light-soft mil-mb-60">
                  Welcome to our world of endless imagination and boundless creativity.
                  Together, let&apos;s embark on a remarkable journey where dreams become tangible realities.
                </p>
              </div>
            </div>
            <Link href="/#services" className="mil-button mil-arrow-place mil-btn-space">
              <span>What we do</span><ArrowSVG />
            </Link>
            <Link href="/portfolio" className="mil-link mil-muted mil-upper">
              <span>View works</span><ArrowSVG />
            </Link>
            <div className="mil-circle-text">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" className="mil-ct-svg" style={{animation:'spin 20s linear infinite'}}>
                <defs><path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0" /></defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g><use xlinkHref="#circlePath" fill="none" /><text style={{letterSpacing:'6.5px'}}><textPath xlinkHref="#circlePath">Scroll down - Scroll down - </textPath></text></g>
              </svg>
              <Link href="/#services" className="mil-button mil-icon-button mil-arrow-down"><ArrowSVG /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
