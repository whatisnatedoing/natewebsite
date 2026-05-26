'use client'
import { useState } from 'react'
import { ArrowSVG } from '@/components/layout/Navbar'

type F = { name:string; email:string; subject:string; service:string; budget:string; message:string }
const INIT:F = { name:'', email:'', subject:'', service:'', budget:'', message:'' }
const SERVICES = ['Brand Identity','Web Design & Development','Motion & Video','App Development','Other']
const BUDGETS  = ['Under $1,000','$1,000 – $3,000','$3,000 – $7,000','$7,000 – $15,000','$15,000+']
const SELECT_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23000' stroke-width='1.5' fill='none'/%3E%3C/svg%3E") no-repeat right 20px center`

export default function ContactForm() {
  const [form, setForm]       = useState<F>(INIT)
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState('')

  const up = (k:keyof F) => (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm(p=>({...p,[k]:e.target.value}))

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault(); setSending(true); setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSent(true); setForm(INIT)
    } catch { setError('Something went wrong. Please try again or email me directly.') }
    finally { setSending(false) }
  }

  if (sent) return (
    <div className="mil-up" style={{padding:'60px 40px',background:'rgba(174,140,111,0.08)',borderRadius:16,textAlign:'center'}}>
      <div style={{fontSize:48,marginBottom:20}}>✓</div>
      <h4 className="mil-mb-15">Message sent!</h4>
      <p style={{color:'rgba(0,0,0,0.5)',marginBottom:30}}>Thanks for reaching out. I&apos;ll be in touch within 24 hours.</p>
      <button onClick={()=>setSent(false)} className="mil-button mil-arrow-place" style={{fontFamily:'inherit',cursor:'pointer',border:'none'}}><span>Send another</span><ArrowSVG dark /></button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col-lg-6"><div className="mil-input-frame mil-up"><label>Full Name *</label><input type="text" placeholder="John Doe" value={form.name} onChange={up('name')} required /></div></div>
        <div className="col-lg-6"><div className="mil-input-frame mil-up"><label>Email Address *</label><input type="email" placeholder="john@example.com" value={form.email} onChange={up('email')} required /></div></div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="mil-input-frame mil-up"><label>Service</label>
            <select value={form.service} onChange={up('service')} style={{height:60,padding:'0 20px',appearance:'none',background:`${SELECT_BG}`,backgroundSize:'12px',cursor:'pointer'}}>
              <option value="">Select a service</option>
              {SERVICES.map(s=><option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mil-input-frame mil-up"><label>Budget Range</label>
            <select value={form.budget} onChange={up('budget')} style={{height:60,padding:'0 20px',appearance:'none',background:`${SELECT_BG}`,backgroundSize:'12px',cursor:'pointer'}}>
              <option value="">Select a budget</option>
              {BUDGETS.map(b=><option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="mil-input-frame mil-up"><label>Subject *</label><input type="text" placeholder="Brief project description" value={form.subject} onChange={up('subject')} required /></div>
      <div className="mil-input-frame mil-up"><label>Message *</label><textarea rows={6} placeholder="Tell me about your project, goals, and timeline..." value={form.message} onChange={up('message')} required style={{height:180}} /></div>
      {error && <p className="mil-up" style={{color:'#e53935',fontSize:14,marginBottom:20}}>{error}</p>}
      <div className="mil-up">
        <button type="submit" disabled={sending} className="mil-button mil-arrow-place"
          style={{fontFamily:'inherit',cursor:sending?'not-allowed':'pointer',border:'none',opacity:sending?0.7:1}}
        ><span>{sending?'Sending...':'Send Message'}</span><ArrowSVG dark /></button>
      </div>
    </form>
  )
}
