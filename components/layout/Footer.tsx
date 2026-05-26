'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <footer className="mil-dark-bg">
      <div className="mi-invert-fix">
        <div className="container" style={{ paddingTop: 120, paddingBottom: 60 }}>

          {/* Top grid */}
          <div className="mil-footer-grid mil-mb-60">

            {/* Brand col */}
            <div>
              <div className="mil-muted mil-up mil-mb-30" style={{ fontSize: 36, fontWeight: 500 }}>
                Nate Danbury.
              </div>
              <p className="mil-light-soft mil-up mil-mb-30" style={{ fontSize: 14, lineHeight: '180%' }}>
                Transforming ideas into exceptional digital experiences through design and innovation.
              </p>

              {/* Social icons */}
              <ul className="mil-up mil-mb-30" style={{ listStyle: 'none', padding: 0, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[
                  { href: 'https://twitter.com/natedanbury',    icon: 'fab fa-twitter',   label: 'Twitter'   },
                  { href: 'https://instagram.com/natedanbury',  icon: 'fab fa-instagram', label: 'Instagram' },
                  { href: 'https://linkedin.com/in/natedanbury',icon: 'fab fa-linkedin',  label: 'LinkedIn'  },
                  { href: 'https://behance.net/natedanbury',    icon: 'fab fa-behance',   label: 'Behance'   },
                  { href: 'https://dribbble.com/natedanbury',   icon: 'fab fa-dribbble',  label: 'Dribbble'  },
                ].map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      style={{
                        width: 40, height: 40, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'rgba(255,255,255,0.5)', fontSize: 14,
                        transition: 'all 0.2s cubic-bezier(0,0,0.36,1)',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = '#000' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)' }}
                    >
                      <i className={s.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <h6 className="mil-light mil-up mil-mb-15" style={{ fontSize: 14, fontWeight: 500 }}>
                Newsletter
              </h6>
              {submitted ? (
                <p className="mil-light-soft" style={{ fontSize: 13 }}>✓ Thanks for subscribing!</p>
              ) : (
                <form className="mil-subscribe-form mil-up" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="mil-button-sm">
                    <i className="fas fa-arrow-right" style={{ fontSize: 12 }}></i>
                  </button>
                </form>
              )}
            </div>

            {/* Quick Links */}
            <div>
              <h6 className="mil-light mil-upper mil-up mil-mb-30">Quick Links</h6>
              <ul className="mil-footer-list mil-up">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h6 className="mil-light mil-upper mil-up mil-mb-30">Resources</h6>
              <ul className="mil-footer-list mil-up">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/questionnaire">Get Started</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h6 className="mil-light mil-upper mil-up mil-mb-30">Legal</h6>
              <ul className="mil-footer-list mil-up">
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service">Terms of Service</Link></li>
                <li><Link href="/cookie-policy">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mil-divider mil-up mil-mb-30"></div>

          {/* Bottom row */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mil-light-soft mil-up mil-mb-15" style={{ fontSize: 13 }}>
                © {new Date().getFullYear()} Nate Danbury. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6">
              <p className="mil-light-soft mil-up mil-mb-15" style={{ fontSize: 13, textAlign: 'right' }}>
                Designed &amp; Built by{' '}
                <span style={{ color: 'var(--accent)' }}>Nate Danbury</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
