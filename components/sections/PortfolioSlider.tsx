'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import type { Swiper as SwiperType } from 'swiper'
import { ArrowSVG } from '@/components/layout/Navbar'

// ── Editable: replace with Sanity query in production ──
const projects = [
  { slug:'curatedbyzee', category:'Branding',        title:'Curated by Zee',    cover:'/img/works/1.jpg' },
  { slug:'project-2',    category:'Web Development', title:'Digital Presence',  cover:'/img/works/2.jpg' },
  { slug:'project-3',    category:'Design',          title:'Visual Identity',   cover:'/img/works/3.jpg' },
  { slug:'project-4',    category:'App Development', title:'App Experience',    cover:'/img/works/4.jpg' },
  { slug:'project-5',    category:'Branding',        title:'Brand Refresh',     cover:'/img/works/5.jpg' },
]

export default function PortfolioSlider() {
  const swiperRef = useRef<SwiperType | null>(null)
  return (
    <section className="mil-soft-bg" style={{paddingTop:120,paddingBottom:120,overflow:'hidden'}}>
      <div className="container">
        <div className="row align-items-center mil-mb-60">
          <div className="col-lg-6">
            <span className="mil-suptitle mil-upper mil-suptitle-dark mil-up mil-mb-30">Our Work</span>
            <h2 className="mil-up mil-mb-30">Recent <span className="mil-thin">Projects</span></h2>
          </div>
          <div className="col-lg-6">
            <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:20,flexWrap:'wrap'}}>
              <div className="mil-slider-nav mil-up">
                <button className="mil-slider-arrow mil-prev" onClick={()=>swiperRef.current?.slidePrev()} aria-label="Previous" />
                <button className="mil-slider-arrow" onClick={()=>swiperRef.current?.slideNext()} aria-label="Next" />
              </div>
              <Link href="/portfolio" className="mil-link mil-dark mil-upper mil-up"><span>All works</span><ArrowSVG dark /></Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{paddingLeft:'max(20px, calc((100vw - 1320px) / 2 + 30px))'}}>
        <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={1.15}
          onSwiper={(s)=>{swiperRef.current=s}}
          breakpoints={{576:{slidesPerView:1.3},768:{slidesPerView:1.8},992:{slidesPerView:2.2},1200:{slidesPerView:2.8},1400:{slidesPerView:3.2}}}
        >
          {projects.map((p) => (
            <SwiperSlide key={p.slug}>
              <Link href={`/portfolio/${p.slug}`} className="mil-portfolio-item mil-more" style={{display:'block'}}>
                <div className="mil-cover-frame">
                  <div className="mil-cover"><img src={p.cover} alt={p.title} loading="lazy" /></div>
                </div>
                <div className="mil-descr">
                  <div className="mil-labels mil-mb-10"><span className="mil-label mil-accent mil-upper">{p.category}</span></div>
                  <h4>{p.title}</h4>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
