import { client, PROJECT_BY_SLUG_QUERY, ALL_PROJECTS_QUERY, urlFor } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ProjectGallery from '@/components/portfolio/ProjectGallery'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowSVG } from '@/components/layout/Navbar'
export const revalidate = 60

const STATIC: Record<string,any> = {
  curatedbyzee:{ _id:'curatedbyzee', title:'Curated by Zee', client:'Curated by Zee', designer:'Nate Danbury', date:'August 2025', category:'branding', categoryLabel:'Fashion', cover:'/img/works/1.jpg', projectHeading:'Simplicity, elegance, innovation!', shortDescription:'A complete brand identity for a luxury fashion curation platform — visual language, typography system, and brand guidelines built from scratch.',
    gallery:[{_key:'g1',src:'/img/works/1.jpg',layout:'horizontal',alt:'Brand overview'},{_key:'g2',src:'/img/works/2.jpg',layout:'square',alt:'Logo system'},{_key:'g3',src:'/img/works/3.jpg',layout:'square',alt:'Typography'},{_key:'g4',src:'/img/works/4.jpg',layout:'horizontal',alt:'Brand applications'},{_key:'g5',src:'/img/works/5.jpg',layout:'vertical',alt:'Mockup 1'},{_key:'g6',src:'/img/works/6.jpg',layout:'vertical',alt:'Mockup 2'}],
    prevProject:{title:'Previous',slug:{current:'project-6'}}, nextProject:{title:'Next',slug:{current:'project-2'}} },
}

export async function generateStaticParams() {
  try { const p=await client.fetch(ALL_PROJECTS_QUERY); return p.map((x:any)=>({slug:x.slug.current})) } catch { return Object.keys(STATIC).map(slug=>({slug})) }
}
function getImg(img:any,fb?:string){if(img?.asset){try{return urlFor(img).width(1200).url()}catch{}}; return img?.src||fb||'/img/works/placeholder.jpg'}

export default async function ProjectPage({ params }:{ params:{slug:string} }) {
  let project:any=null
  try { project=await client.fetch(PROJECT_BY_SLUG_QUERY,{slug:params.slug}) } catch {}
  if (!project) project=STATIC[params.slug]
  if (!project) notFound()
  const cover=getImg(project.coverImage,project.cover)

  return (
    <>
      <ScrollReveal />
      <section className="mil-banner mil-inner-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame"><div className="mil-animation mil-position-4"></div></div>
          <div className="mil-gradient"></div>
          <div className="container">
            <div className="mil-banner-content mil-up">
              <ul className="mil-breadcrumbs mil-mb-60"><li><Link href="/">Home</Link></li><li><Link href="/portfolio">Portfolio</Link></li><li><a href="#">{project.title}</a></li></ul>
              <div className="row align-items-end">
                <div className="col-lg-8">
                  <div className="mil-labels mil-mb-30"><span className="mil-label mil-accent mil-upper">{project.categoryLabel||project.category}</span></div>
                  <h1 className="mil-muted mil-mb-30">{project.title}</h1>
                </div>
                <div className="col-lg-4">
                  <div style={{display:'flex',flexDirection:'column',gap:12,paddingBottom:4}}>
                    {project.client&&<div style={{display:'flex',gap:12}}><span style={{color:'rgba(255,255,255,0.3)',fontSize:12,textTransform:'uppercase',letterSpacing:1,fontWeight:500,minWidth:75}}>Client</span><span style={{color:'#fff',fontSize:14}}>{project.client}</span></div>}
                    {project.designer&&<div style={{display:'flex',gap:12}}><span style={{color:'rgba(255,255,255,0.3)',fontSize:12,textTransform:'uppercase',letterSpacing:1,fontWeight:500,minWidth:75}}>Designer</span><span style={{color:'#fff',fontSize:14}}>{project.designer}</span></div>}
                    {project.date&&<div style={{display:'flex',gap:12}}><span style={{color:'rgba(255,255,255,0.3)',fontSize:12,textTransform:'uppercase',letterSpacing:1,fontWeight:500,minWidth:75}}>Date</span><span style={{color:'#fff',fontSize:14}}>{project.date}</span></div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{maxHeight:680,overflow:'hidden'}}>
        <img src={cover} alt={project.title} style={{width:'100%',height:680,objectFit:'cover'}} />
      </section>

      <section className="mil-p-120-90">
        <div className="container">
          <div className="row justify-content-between align-items-center mil-mb-60">
            <div className="col-lg-5">
              <span className="mil-suptitle mil-upper mil-suptitle-dark mil-up mil-mb-30">About the Project</span>
              <h2 className="mil-up mil-mb-30">{project.projectHeading||project.title}</h2>
            </div>
            <div className="col-lg-6">
              <p className="mil-up mil-mb-30" style={{fontSize:16,lineHeight:'180%'}}>{project.shortDescription}</p>
              {project.description?.map((b:any,i:number)=>(
                <p key={i} className="mil-up" style={{fontSize:15,lineHeight:'180%',color:'rgba(0,0,0,0.6)',marginBottom:16}}>{b.children?.map((c:any)=>c.text).join('')}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.gallery?.length>0&&(
        <section className="mil-p-0-120"><div className="container"><ProjectGallery gallery={project.gallery} getImageSrc={getImg} /></div></section>
      )}

      <section className="mil-dark-bg mil-p-120-120">
        <div className="mi-invert-fix"><div className="container mil-center">
          <span className="mil-suptitle mil-upper mil-light-soft mil-up mil-mb-30">Next Step</span>
          <h2 className="mil-muted mil-up mil-mb-60">Have a project <span className="mil-thin">in mind?</span></h2>
          <Link href="/contact" className="mil-button mil-arrow-place mil-up"><span>Let&apos;s talk</span><ArrowSVG /></Link>
        </div></div>
      </section>

      <section className="mil-p-120-120">
        <div className="container">
          <div className="mil-works-nav">
            {project.prevProject?<Link href={`/portfolio/${project.prevProject.slug?.current||project.prevProject.slug}`} className="mil-link mil-dark mil-icon-left mil-up"><span>Previous</span><ArrowSVG dark /></Link>:<div/>}
            <Link href="/portfolio" className="mil-button-sm mil-up" style={{background:'rgba(0,0,0,0.08)',display:'flex',alignItems:'center',justifyContent:'center'}}><i className="fas fa-th" style={{fontSize:14,color:'rgb(0,0,0)'}}></i></Link>
            {project.nextProject?<Link href={`/portfolio/${project.nextProject.slug?.current||project.nextProject.slug}`} className="mil-link mil-dark mil-up"><span>Next</span><ArrowSVG dark /></Link>:<div/>}
          </div>
        </div>
      </section>
    </>
  )
}
