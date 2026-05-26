'use client'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import type { Swiper as SwiperType } from 'swiper'

// ── Editable: add/remove/edit reviews ──
const reviews = [
  { id:1, text:"Working with Nate was an absolute pleasure. He took our vague ideas and turned them into a brand identity that perfectly captures who we are. The attention to detail was extraordinary.", author:'Sarah Mitchell', role:'Founder, Bloom Studio', avatar:'/img/team/2.jpg' },
  { id:2, text:"The website Nate built for us exceeded every expectation. It's fast, beautiful, and our conversion rate jumped 40% within the first month. Highly recommend his work.", author:'James Okafor', role:'CEO, Meridian Tech', avatar:'/img/team/3.jpg' },
  { id:3, text:"Nate brings a rare combination of creative vision and technical execution. He doesn't just design — he solves problems. Our rebrand transformed how clients perceive us.", author:'Priya Sharma', role:'Creative Director, Volta Agency', avatar:'/img/team/4.jpg' },
  { id:4, text:"From the first call to the final delivery, the process was seamless. Nate communicates clearly, hits every deadline, and produces stunning work. He's our go-to designer.", author:'Marcus Webb', role:'Co-founder, Helio Films', avatar:'/img/team/5.jpg' },
]

export default function Reviews() {
  const swiperRef = useRef<SwiperType | null>(null)
  return (
    <section className="mil-soft-bg mil-p-120-120">
      <div className="container">
        <div className="row justify-content-center mil-mb-60">
          <div className="col-lg-8 mil-center">
            <span className="mil-suptitle mil-upper mil-suptitle-dark mil-up mil-mb-30">Testimonials</span>
            <h2 className="mil-up mil-mb-30">What Clients <span className="mil-thin">Say</span></h2>
          </div>
        </div>
        <div className="mil-up">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30} slidesPerView={1}
            autoplay={{ delay:5000, disableOnInteraction:false }}
            pagination={{ clickable:true, el:'.mil-revi-pagination' }}
            onSwiper={(s)=>{swiperRef.current=s}}
            breakpoints={{ 768:{slidesPerView:1}, 992:{slidesPerView:2}, 1200:{slidesPerView:3} }}
            style={{ paddingBottom:50 }}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id}>
                <div style={{ background:'#fff', borderRadius:16, padding:'40px 30px', height:'100%', boxShadow:'0 4px 30px rgba(0,0,0,0.06)', display:'flex', flexDirection:'column', gap:20 }}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M10 22C10 24.2 11.8 26 14 26C16.2 26 18 24.2 18 22C18 19.8 16.2 18 14 18H13V16C13 13.8 14.8 12 17 12V10C13.7 10 11 12.7 11 16V17.2C10.4 17.7 10 18.8 10 20V22ZM20 22C20 24.2 21.8 26 24 26C26.2 26 28 24.2 28 22C28 19.8 26.2 18 24 18H23V16C23 13.8 24.8 12 27 12V10C23.7 10 21 12.7 21 16V17.2C20.4 17.7 20 18.8 20 20V22Z" fill="rgba(0,0,0,0.08)"/>
                  </svg>
                  <p style={{fontSize:15,lineHeight:'170%',color:'rgba(0,0,0,0.6)',flex:1}}>{r.text}</p>
                  <div style={{display:'flex',alignItems:'center',gap:15}}>
                    <img src={r.avatar} alt={r.author} style={{width:48,height:48,borderRadius:'50%',objectFit:'cover',flexShrink:0}} />
                    <div>
                      <h6 style={{fontSize:14,marginBottom:3,color:'rgb(0,0,0)'}}>{r.author}</h6>
                      <p style={{fontSize:11,color:'rgba(0,0,0,0.4)',fontWeight:500,letterSpacing:1,textTransform:'uppercase'}}>{r.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mil-revi-pagination" style={{display:'flex',justifyContent:'center',gap:8,marginTop:-10}}></div>
        </div>
      </div>

    </section>
  )
}
