'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// ── Cookie Banner ─────────────────────────────────────────────────────
export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { if (!localStorage.getItem('cookieConsent')) setVisible(true) }, [])
  const accept  = () => { localStorage.setItem('cookieConsent', 'accepted');  setVisible(false) }
  const decline = () => { localStorage.setItem('cookieConsent', 'declined');  setVisible(false) }
  if (!visible) return null
  return (
    <div className="mil-cookie-banner">
      <div className="mil-cookie-content">
        <div className="mil-cookie-icon"><i className="fas fa-cookie-bite"></i></div>
        <div className="mil-cookie-text">
          <h5>We Use Cookies</h5>
          <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies. <Link href="/cookie-policy">Learn more</Link></p>
          <div className="mil-cookie-actions">
            <button className="mil-cookie-btn mil-cookie-decline" onClick={decline}>Decline</button>
            <button className="mil-cookie-btn mil-cookie-accept" onClick={accept}>Accept All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Scroll Progress ───────────────────────────────────────────────────
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const fn = () => {
      const t = window.scrollY
      const d = document.documentElement.scrollHeight - window.innerHeight
      setProgress(d > 0 ? (t / d) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <div className="mil-progress-track">
      <div className="mil-progress" style={{ height: `${progress}%` }}></div>
    </div>
  )
}

// ── Custom Cursor ─────────────────────────────────────────────────────
export function Cursor() {
  const ballRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const cur = useRef({ x: 0, y: 0 })
  const raf = useRef<number>()

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY } }
    const animate = () => {
      cur.current.x = lerp(cur.current.x, pos.current.x, 0.15)
      cur.current.y = lerp(cur.current.y, pos.current.y, 0.15)
      if (ballRef.current) {
        ballRef.current.style.left = `${cur.current.x}px`
        ballRef.current.style.top  = `${cur.current.y}px`
      }
      raf.current = requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div ref={ballRef} className="mil-ball">
      <span className="mil-icon-1">
        <svg viewBox="0 0 128 128">
          <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9z" />
        </svg>
      </span>
      <div className="mil-more-text">More</div>
      <div className="mil-choose-text">Choose</div>
    </div>
  )
}

// ── Preloader — exact two-phase animation matching original HTML ──────
export function Preloader() {
  const [phase, setPhase]     = useState<'words' | 'domain' | 'done'>('words')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Phase 1: words animate in (0 → 1.2s)
    // Phase 2: domain reveal appears (1.2s → 2.4s)
    // Phase 3: preloader fades out (2.4s → 2.8s)
    const t1 = setTimeout(() => setPhase('domain'), 1200)
    const t2 = setTimeout(() => setPhase('done'),   2400)
    const t3 = setTimeout(() => setVisible(false),  2900)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (!visible) return null

  return (
    <div
      className="mil-preloader"
      style={{
        opacity:    phase === 'done' ? 0 : 1,
        transition: phase === 'done' ? 'opacity 0.5s ease' : 'none',
        pointerEvents: phase === 'done' ? 'none' : 'all',
      }}
    >
      <div className="mil-preloader-animation">

        {/* Phase 1: Imagine. Shape. Impact. */}
        <div
          className="mil-pos-abs mil-animation-1"
          style={{
            opacity:    phase === 'words' ? 1 : 0,
            transition: phase !== 'words' ? 'opacity 0.4s ease' : 'none',
          }}
        >
          {[
            { text: 'Imagine.', thin: true  },
            { text: 'Shape.',   thin: false },
            { text: 'Impact.',  thin: true  },
          ].map((w, i) => (
            <p
              key={w.text}
              className={`mil-h3 mil-muted ${w.thin ? 'mil-thin' : ''}`}
              style={{
                opacity:   0,
                animation: `milPreloaderWord 0.5s ${0.1 + i * 0.25}s forwards`,
                marginRight: i < 2 ? 15 : 0,
              }}
            >
              {w.text}
            </p>
          ))}
        </div>

        {/* Phase 2: natedanbury.com reveal */}
        <div
          className="mil-pos-abs mil-animation-2"
          style={{
            opacity:    phase === 'domain' ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          <div className="mil-reveal-frame">
            {/* The sliding box that reveals the text */}
            <p
              className="mil-reveal-box"
              style={{
                animation: phase === 'domain' ? 'milRevealBox 0.7s cubic-bezier(0,0,0.36,1) forwards' : 'none',
              }}
            ></p>
            <p className="mil-h3 mil-muted mil-thin">natedanbury.com</p>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes milPreloaderWord {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes milRevealBox {
          from { width: 0; }
          to   { width: 100%; }
        }
        .mil-reveal-frame {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }
        .mil-reveal-box {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0;
          background-color: var(--accent);
          z-index: 2;
        }
        .mil-reveal-frame .mil-h3 {
          position: relative;
          z-index: 1;
          padding: 4px 8px;
        }
      `}</style>
    </div>
  )
}

// ── Scroll Reveal (IntersectionObserver) ─────────────────────────────
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.mil-up')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('mil-visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
