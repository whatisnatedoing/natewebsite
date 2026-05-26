'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const c = localStorage.getItem('cookieConsent'); if (!c) setVisible(true) }, [])
  const accept = () => { localStorage.setItem('cookieConsent','accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('cookieConsent','declined'); setVisible(false) }
  if (!visible) return null
  return (
    <div className="mil-cookie-banner">
      <div className="mil-cookie-content">
        <div className="mil-cookie-icon"><i className="fas fa-cookie-bite"></i></div>
        <div className="mil-cookie-text">
          <h5>We Use Cookies</h5>
          <p>We use cookies to enhance your browsing experience. <Link href="/cookie-policy">Learn more</Link></p>
          <div className="mil-cookie-actions">
            <button className="mil-cookie-btn mil-cookie-decline" onClick={decline}>Decline</button>
            <button className="mil-cookie-btn mil-cookie-accept" onClick={accept}>Accept All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => { const t = window.scrollY; const d = document.documentElement.scrollHeight - window.innerHeight; setProgress(d > 0 ? (t/d)*100 : 0) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div className="mil-progress-track"><div className="mil-progress" style={{ height:`${progress}%` }}></div></div>
}

export function Cursor() {
  const ballRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x:0, y:0 }), cur = useRef({ x:0, y:0 }), raf = useRef<number>()
  useEffect(() => {
    const onMove = (e: MouseEvent) => { pos.current = { x: e.clientX, y: e.clientY } }
    const lerp = (a:number,b:number,t:number) => a+(b-a)*t
    const animate = () => {
      cur.current.x = lerp(cur.current.x, pos.current.x, 0.15)
      cur.current.y = lerp(cur.current.y, pos.current.y, 0.15)
      if (ballRef.current) { ballRef.current.style.left=`${cur.current.x}px`; ballRef.current.style.top=`${cur.current.y}px` }
      raf.current = requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)
    return () => { window.removeEventListener('mousemove', onMove); if (raf.current) cancelAnimationFrame(raf.current) }
  }, [])
  return <div ref={ballRef} className="mil-ball" style={{ position:'fixed', pointerEvents:'none' }} />
}

export function Preloader() {
  const [visible, setVisible] = useState(true)
  useEffect(() => { const t = setTimeout(() => setVisible(false), 2200); return () => clearTimeout(t) }, [])
  if (!visible) return null
  return (
    <div className="mil-preloader">
      <div className="mil-preloader-animation">
        <div className="mil-pos-abs" style={{ display:'flex', flexDirection:'row', gap:16 }}>
          {['Imagine.','Shape.','Impact.'].map((w,i)=>(
            <p key={w} className={`mil-h3 mil-muted ${i===1?'':'mil-thin'}`} style={{ opacity:0, animation:`fadeInUp 0.5s ${0.3+i*0.3}s forwards` }}>{w}</p>
          ))}
        </div>
      </div>
      <style>{`@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.mil-up')
    const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('mil-visible') }) }, { threshold:0.1, rootMargin:'0px 0px -40px 0px' })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}
