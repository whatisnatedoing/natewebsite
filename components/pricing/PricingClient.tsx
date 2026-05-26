'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowSVG } from '@/components/layout/Navbar'

// ── Editable: update plans, prices, features here ──
const PLANS = {
  branding:[
    { name:'Starter', price:'$1,200', badge:null, accent:false, href:'/questionnaire', cta:'Get started', description:'Perfect for new businesses needing a clean, professional foundation.',
      features:['Logo design (3 concepts)','Brand colour palette','Typography selection','Business card design','Brand guidelines (PDF)','2 rounds of revisions'] },
    { name:'Growth', price:'$2,800', badge:'Most Popular', accent:true, href:'/questionnaire', cta:'Get started', description:'A comprehensive identity system ready to scale across all touchpoints.',
      features:['Everything in Starter','Extended logo suite','Social media kit','Brand pattern / texture','Stationery design','Pitch deck template','4 rounds of revisions'] },
    { name:'Premium', price:'$5,500+', badge:null, accent:false, href:'/contact', cta:"Let's talk", description:'Full brand overhaul for established businesses ready to level up.',
      features:['Everything in Growth','Brand strategy workshop','Competitor analysis','Brand voice & messaging','Motion logo animation','Brand style video','Unlimited revisions'] },
  ],
  web:[
    { name:'Landing Page', price:'$1,800', badge:null, accent:false, href:'/questionnaire', cta:'Get started', description:'A high-converting single-page site built to make an impression.',
      features:['Custom design & development','Mobile responsive','Contact form integration','Basic SEO setup','Google Analytics','CMS (Sanity)','1 month support'] },
    { name:'Business Site', price:'$4,500', badge:'Most Popular', accent:true, href:'/questionnaire', cta:'Get started', description:'A full multi-page website that grows with your business.',
      features:['Up to 8 custom pages','Blog / news section','Advanced SEO','Speed optimisation','CMS (Sanity)','Animations & micro-interactions','3 months support'] },
    { name:'E-Commerce', price:'$8,000+', badge:null, accent:false, href:'/contact', cta:"Let's talk", description:'Custom shopping experiences built to convert and retain.',
      features:['Custom storefront design','Product management CMS','Payment integration','Inventory system','Email automation','Analytics dashboard','6 months support'] },
  ],
  programming:[
    { name:'Essentials', price:'$2,500', badge:null, accent:false, href:'/questionnaire', cta:'Get started', description:'Core app features shipped fast without cutting corners.',
      features:['React / Next.js frontend','REST API integration','Authentication system','Database setup','Deployment & hosting','1 month support'] },
    { name:'Professional', price:'$6,000', badge:'Most Popular', accent:true, href:'/questionnaire', cta:'Get started', description:'Full-stack applications with advanced features and polished UX.',
      features:['Everything in Essentials','Custom admin dashboard','Third-party integrations','Push notifications','Performance monitoring','CI/CD pipeline','3 months support'] },
    { name:'Enterprise', price:'Custom', badge:null, accent:false, href:'/contact', cta:"Let's talk", description:'Complex platforms, custom APIs, and long-term partnership.',
      features:['Everything in Professional','Microservices architecture','Custom integrations','Load balancing & scaling','Security audit','Team training','Dedicated support'] },
  ],
}

const TABS = [
  { key:'branding',    label:'Branding'        },
  { key:'web',         label:'Web Development' },
  { key:'programming', label:'Programming'     },
]

export default function PricingClient() {
  const [tab, setTab] = useState<keyof typeof PLANS>('branding')
  const plans = PLANS[tab]

  return (
    <>
      {/* Tabs */}
      <div className="mil-up mil-mb-60" style={{display:'flex',justifyContent:'center'}}>
        <div className="mil-tabs">
          {TABS.map(t=>(
            <button key={t.key} className={`mil-tab ${tab===t.key?'mil-active':''}`}
              onClick={()=>setTab(t.key as keyof typeof PLANS)}
              style={{fontFamily:'inherit',border:'none',cursor:'pointer'}}
            >{t.label}</button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="row">
        {plans.map(plan=>(
          <div key={plan.name} className="col-lg-4 mil-mb-30">
            <div className={`mil-price-card mil-up ${plan.accent?'mil-accent-card':''}`}>
              {plan.badge && <span className="mil-badge">{plan.badge}</span>}
              <p className="mil-upper mil-mb-15" style={{fontSize:12,fontWeight:500,letterSpacing:2,color:plan.accent?'rgba(255,255,255,0.5)':'rgba(0,0,0,0.4)'}}>{plan.name}</p>
              <div className="mil-price" style={{color:plan.accent?'#fff':'rgb(0,0,0)'}}>{plan.price}</div>
              <p style={{fontSize:14,color:plan.accent?'rgba(255,255,255,0.5)':'rgba(0,0,0,0.5)',lineHeight:'160%',marginBottom:24}}>{plan.description}</p>
              <div className="mil-divider" style={{marginBottom:24,background:plan.accent?'rgba(255,255,255,0.1)':'rgba(0,0,0,0.08)'}}></div>
              <ul className="mil-check-icon-list">
                {plan.features.map(f=>(
                  <li key={f} style={{color:plan.accent?'rgba(255,255,255,0.75)':'rgba(0,0,0,0.65)'}}>
                    <i className="fas fa-check" style={{color:'var(--accent)',fontSize:12,flexShrink:0}}></i>{f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} className="mil-button mil-arrow-place"
                style={{width:'100%',justifyContent:'space-between',marginTop:8,background:plan.accent?'var(--accent)':'rgba(0,0,0,0.08)',color:plan.accent?'#000':'rgb(0,0,0)'}}
              ><span>{plan.cta}</span><ArrowSVG dark /></Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mil-up" style={{marginTop:80,textAlign:'center'}}>
        <p style={{color:'rgba(0,0,0,0.5)',fontSize:15,marginBottom:20}}>Not sure which package is right for you?</p>
        <Link href="/questionnaire" className="mil-link mil-dark mil-upper"><span>Answer a few questions and we&apos;ll recommend one</span><ArrowSVG dark /></Link>
      </div>

    </>
  )
}
