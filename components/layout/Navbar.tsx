'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/',            label: 'Home'      },
  { href: '/portfolio',   label: 'Portfolio' },
  { href: '/#services',  label: 'Services'  },
  { href: '/pricing',     label: 'Pricing'   },
  { href: '/blog',        label: 'Blog'      },
  { href: '/contact',     label: 'Contact'   },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setMenuOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) => {
    const base = href.split('#')[0]
    if (base === '/') return pathname === '/'
    return base !== '/' && pathname.startsWith(base)
  }

  return (
    <>
      {/* ── Full-screen overlay menu ───────────────────────────── */}
      <div className={`mil-menu-frame ${menuOpen ? 'mil-active' : ''}`}>
        {/* Clone of frame-top inside menu */}
        <div className="mil-frame-top mil-menu-frame-top">
          <Link href="/" className="mil-logo mil-muted" onClick={() => setMenuOpen(false)}>
            Nate Danbury.
          </Link>
          <button
            className={`mil-menu-btn ${menuOpen ? 'mil-active' : ''}`}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span></span>
          </button>
        </div>

        <div className="container">
          <div className="mil-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="mil-main-menu">
                  <ul>
                    {navLinks.map((link) => (
                      <li key={link.href} className={`mil-has-children ${isActive(link.href) ? 'mil-active' : ''}`}>
                        <Link href={link.href} onClick={() => setMenuOpen(false)}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main fixed frame ──────────────────────────────────── */}
      <div className="mil-frame">
        <div className="mil-frame-top">
          <Link href="/" className="mil-logo">Nate Danbury.</Link>

          {/* Desktop nav */}
          <nav className="mil-desktop-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href} className={isActive(link.href) ? 'mil-active' : ''}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <div className="mil-mobile-controls">
            <button
              className={`mil-menu-btn ${menuOpen ? 'mil-active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
            </button>
          </div>
        </div>

        <div className="mil-frame-bottom">
          <div className="mil-current-page mil-upper mil-dark-soft">
            {pathname === '/' ? 'Home' : pathname.replace('/', '').replace(/-/g, ' ')}
          </div>
          <div className="mil-back-to-top">
            <a href="#top" className="mil-link mil-dark mil-upper">
              <span>Back to top</span>
              <ArrowSVG dark />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export function ArrowSVG({ dark }: { dark?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"
        fill={dark ? 'rgb(0,0,0)' : 'rgb(255,255,255)'}
      />
    </svg>
  )
}
