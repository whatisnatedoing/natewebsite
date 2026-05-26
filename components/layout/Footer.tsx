'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowSVG } from '@/components/layout/Navbar'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubscribe = (e: React.FormEvent) => { e.preventDefault(); if (email) { setSubmitted(true); setEmail('') } }

  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container mil-p-120-60">
          <div className="mil-footer-grid">
            <div>
              <div className="mil-muted mil-logo mil-up mil-mb-30">Nate Danbury.</div>
              <p className="mil-light-soft mil-up mil-mb-30">Transforming ideas into exceptional digital experiences through design and innovation.</p>
              <h6 className="mil-light mil-up mil-mb-15">Subscribe to Newsletter</h6>
              {submitted ? <p className="mil-light-soft" style={{fontSize:13}}>✓ Thanks for subscribing!</p> : (
                <form className="mil-subscribe-form mil-up" onSubmit={handleSubscribe}>
                  <input type="email" placeholder="Your email address" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                  <button type="submit" className="mil-button-sm"><i className="fas fa-arrow-right"></i></button>
                </form>
              )}
            </div>
            <div>
              <h6 className="mil-light mil-up mil-mb-30">Quick Links</h6>
              <ul className="mil-footer-list mil-up">
                {[{href:'/',l:'Home'},{href:'/portfolio',l:'Portfolio'},{href:'/#services',l:'Services'},{href:'/pricing',l:'Pricing'}].map(({href,l})=><li key={href}><Link href={href}>{l}</Link></li>)}
              </ul>
            </div>
            <div>
              <h6 className="mil-light mil-up mil-mb-30">Resources</h6>
              <ul className="mil-footer-list mil-up">
                {[{href:'/blog',l:'Blog'},{href:'/contact',l:'Contact'},{href:'/questionnaire',l:'Get Started'}].map(({href,l})=><li key={href}><Link href={href}>{l}</Link></li>)}
              </ul>
            </div>
            <div>
              <h6 className="mil-light mil-up mil-mb-30">Legal</h6>
              <ul className="mil-footer-list mil-up">
                {[{href:'/privacy-policy',l:'Privacy Policy'},{href:'/terms-of-service',l:'Terms of Service'},{href:'/cookie-policy',l:'Cookie Policy'}].map(({href,l})=><li key={href}><Link href={href}>{l}</Link></li>)}
              </ul>
            </div>
          </div>
          <div className="mil-divider mil-up mil-mb-60"></div>
          <div className="row align-items-center">
            <div className="col-md-6"><p className="mil-light-soft mil-up mil-mb-15">© 2025 Nate Danbury. All Rights Reserved.</p></div>
            <div className="col-md-6">
              <ul className="mil-social-icons mil-up mil-mb-15">
                {[{href:'https://twitter.com',icon:'fa-twitter'},{href:'https://instagram.com',icon:'fa-instagram'},{href:'https://linkedin.com',icon:'fa-linkedin'},{href:'https://behance.net',icon:'fa-behance'}].map((s)=>(
                  <li key={s.icon}><a href={s.href} target="_blank" rel="noopener noreferrer"><i className={`fab ${s.icon}`}></i></a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
