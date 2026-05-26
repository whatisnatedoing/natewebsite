import Link from 'next/link'
import { ArrowSVG } from '@/components/layout/Navbar'
export default function NotFound() {
  return (
    <div className="mil-dark-bg" style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'120px 20px'}}>
      <div className="mi-invert-fix" style={{width:'100%'}}>
        <div className="container">
          <p style={{fontSize:180,fontWeight:800,lineHeight:1,color:'rgba(255,255,255,0.05)',marginBottom:30,fontFamily:'Outfit,sans-serif'}}>404</p>
          <h2 className="mil-muted mil-up mil-mb-30">Page <span className="mil-thin">Not Found</span></h2>
          <p className="mil-light-soft mil-up mil-mb-60" style={{maxWidth:400,margin:'0 auto 60px'}}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/" className="mil-button mil-arrow-place mil-up"><span>Back to Home</span><ArrowSVG /></Link>
        </div>
      </div>
    </div>
  )
}
