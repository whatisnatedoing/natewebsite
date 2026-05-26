'use client'
import { useState } from 'react'
import { ArrowSVG } from '@/components/layout/Navbar'

const SERVICES_LIST = ['Brand Identity','Logo Design','Web Design','Web Development','E-Commerce','Mobile App','Motion Design','Video Production','Social Media Design','Print Design']
const BUDGETS   = ['Under $1,000','$1,000 – $3,000','$3,000 – $7,000','$7,000 – $15,000','$15,000+','Not sure yet']
const TIMELINES = ['ASAP','Within 1 month','1–3 months','3–6 months','Flexible']

type D = { services:string[]; projectName:string; description:string; budget:string; timeline:string; name:string; email:string; phone:string; company:string; referral:string }
const INIT:D = { services:[], projectName:'', description:'', budget:'', timeline:'', name:'', email:'', phone:'', company:'', referral:'' }
const TOTAL = 3

export default function QuestionnaireForm() {
  const [step, setStep]        = useState(1)
  const [form, setForm]        = useState<D>(INIT)
  const [submitted, setSubmit] = useState(false)
  const [sending, setSending]  = useState(false)

  const toggleSvc = (s:string) => setForm(p=>({ ...p, services: p.services.includes(s) ? p.services.filter(x=>x!==s) : [...p.services,s] }))
  const up = (k:keyof D) => (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => setForm(p=>({...p,[k]:e.target.value}))
  const next = () => setStep(s=>Math.min(s+1,TOTAL))
  const prev = () => setStep(s=>Math.max(s-1,1))

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault(); setSending(true)
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, subject: 'Project Questionnaire', message: JSON.stringify(form, null, 2) }),
    })
    if (!res.ok) throw new Error('Failed to send')
    setSending(false); setSubmit(true)
  }

  const SelBtn = ({ val, active, onClick }:{ val:string; active:boolean; onClick:()=>void }) => (
    <button type="button" onClick={onClick}
      style={{ padding:'14px 12px', borderRadius:8, border:`1px solid ${active?'var(--accent)':'rgba(0,0,0,0.12)'}`, background:active?'rgba(174,140,111,0.1)':'transparent', color:active?'rgb(0,0,0)':'rgba(0,0,0,0.5)', fontSize:13, cursor:'pointer', fontFamily:'inherit', transition:'all 0.2s', textAlign:'center' as const }}
    >{val}</button>
  )

  if (submitted) return (
    <div className="mil-up" style={{padding:'80px 40px',background:'rgba(174,140,111,0.08)',borderRadius:20,textAlign:'center'}}>
      <div style={{fontSize:56,marginBottom:24}}>🎉</div>
      <h3 className="mil-mb-15">Thanks, {form.name}!</h3>
      <p style={{color:'rgba(0,0,0,0.5)',maxWidth:420,margin:'0 auto 32px',lineHeight:'170%'}}>I&apos;ve received your project details and will be in touch within 24 hours with a tailored proposal.</p>
      <a href="/" className="mil-button mil-arrow-place" style={{display:'inline-flex',border:'none',cursor:'pointer',fontFamily:'inherit'}}><span>Back to home</span><ArrowSVG dark /></a>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Progress */}
      <div className="mil-progress-bar-wrap mil-up" style={{marginBottom:40}}>
        <div style={{width:`${(step/TOTAL)*100}%`,height:'100%',background:'var(--accent)',transition:'width 0.4s ease',borderRadius:3}}></div>
      </div>
      <div className="mil-progress-steps mil-up" style={{marginBottom:50,display:'flex',alignItems:'center',gap:8}}>
        {[1,2,3].map((n,i)=>(
          <>
            <div key={`s${n}`} className={`mil-step ${step===n?'active':''} ${step>n?'completed':''}`}
              style={{background:step>n?'var(--accent)':'transparent',borderColor:step>=n?'var(--accent)':'rgba(0,0,0,0.15)',color:step>n?'#000':step===n?'var(--accent)':'rgba(0,0,0,0.3)'}}>
              {step>n?<i className="fas fa-check" style={{fontSize:11}}></i>:n}
            </div>
            {i<2&&<div key={`l${n}`} style={{flex:1,height:2,background:step>n?'var(--accent)':'rgba(0,0,0,0.1)',transition:'background 0.3s'}}></div>}
          </>
        ))}
      </div>

      {/* Step 1 */}
      {step===1 && (
        <>
          <h4 className="mil-up mil-mb-15">What services do you need?</h4>
          <p className="mil-up mil-mb-30" style={{color:'rgba(0,0,0,0.5)'}}>Select all that apply.</p>
          <div className="mil-checkbox-grid mil-up mil-mb-60">
            {SERVICES_LIST.map(s=>(
              <label key={s} className="mil-checkbox-item" style={{borderColor:form.services.includes(s)?'var(--accent)':'rgba(0,0,0,0.1)',background:form.services.includes(s)?'rgba(174,140,111,0.08)':'transparent',cursor:'pointer'}}>
                <input type="checkbox" checked={form.services.includes(s)} onChange={()=>toggleSvc(s)} style={{accentColor:'var(--accent)',width:16,height:16,flexShrink:0}} />{s}
              </label>
            ))}
          </div>
          <div className="mil-input-frame mil-up"><label>Project Name</label><input type="text" placeholder="e.g. My Brand Refresh" value={form.projectName} onChange={up('projectName')} /></div>
          <div className="mil-input-frame mil-up"><label>Project Description *</label><textarea rows={4} placeholder="Tell me about your project, goals, and what you're looking to achieve..." value={form.description} onChange={up('description')} required style={{height:140}} /></div>
        </>
      )}

      {/* Step 2 */}
      {step===2 && (
        <>
          <h4 className="mil-up mil-mb-15">Budget &amp; Timeline</h4>
          <p className="mil-up mil-mb-30" style={{color:'rgba(0,0,0,0.5)'}}>This helps me recommend the right package for you.</p>
          <div className="mil-input-frame mil-up">
            <label>Budget Range *</label>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}} className="mil-sel-grid">
              {BUDGETS.map(b=><SelBtn key={b} val={b} active={form.budget===b} onClick={()=>setForm(p=>({...p,budget:b}))} />)}
            </div>
          </div>
          <div className="mil-input-frame mil-up" style={{marginTop:30}}>
            <label>Ideal Timeline *</label>
            <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}} className="mil-sel-grid">
              {TIMELINES.map(t=><SelBtn key={t} val={t} active={form.timeline===t} onClick={()=>setForm(p=>({...p,timeline:t}))} />)}
            </div>
          </div>
        </>
      )}

      {/* Step 3 */}
      {step===3 && (
        <>
          <h4 className="mil-up mil-mb-15">Your Details</h4>
          <p className="mil-up mil-mb-30" style={{color:'rgba(0,0,0,0.5)'}}>Almost done — just need to know who I&apos;m talking to.</p>
          <div className="row">
            <div className="col-lg-6"><div className="mil-input-frame mil-up"><label>Full Name *</label><input type="text" placeholder="John Doe" value={form.name} onChange={up('name')} required /></div></div>
            <div className="col-lg-6"><div className="mil-input-frame mil-up"><label>Email Address *</label><input type="email" placeholder="john@example.com" value={form.email} onChange={up('email')} required /></div></div>
          </div>
          <div className="row">
            <div className="col-lg-6"><div className="mil-input-frame mil-up"><label>Phone Number</label><input type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={up('phone')} /></div></div>
            <div className="col-lg-6"><div className="mil-input-frame mil-up"><label>Company / Brand Name</label><input type="text" placeholder="Acme Inc." value={form.company} onChange={up('company')} /></div></div>
          </div>
          <div className="mil-input-frame mil-up"><label>How did you hear about me?</label><input type="text" placeholder="Referral, Google, Instagram..." value={form.referral} onChange={up('referral')} /></div>
        </>
      )}

      {/* Nav */}
      <div className="mil-up" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:40}}>
        {step>1
          ? <button type="button" onClick={prev} className="mil-link mil-dark mil-upper" style={{background:'none',border:'none',cursor:'pointer',fontFamily:'inherit',display:'flex',alignItems:'center',gap:10,fontSize:12,fontWeight:500,letterSpacing:2,textTransform:'uppercase'}}>
              <span style={{width:40,height:40,borderRadius:'50%',background:'rgba(0,0,0,0.08)',display:'flex',alignItems:'center',justifyContent:'center',transform:'rotate(180deg)'}}>
                <ArrowSVG dark />
              </span>
              Back
            </button>
          : <div />}
        {step<TOTAL
          ? <button type="button" onClick={next} className="mil-button mil-arrow-place" style={{fontFamily:'inherit',border:'none',cursor:'pointer'}}><span>Next Step</span><ArrowSVG dark /></button>
          : <button type="submit" disabled={sending} className="mil-button mil-arrow-place" style={{fontFamily:'inherit',border:'none',cursor:sending?'not-allowed':'pointer',opacity:sending?0.7:1}}><span>{sending?'Submitting...':'Submit'}</span><ArrowSVG dark /></button>
        }
      </div>
      <p className="mil-up" style={{fontSize:12,color:'rgba(0,0,0,0.35)',marginTop:20,textAlign:'right'}}>Step {step} of {TOTAL}</p>

    </form>
  )
}
