'use client'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

type GImg = { _key:string; asset?:any; src?:string; layout?:string; alt?:string }

export default function ProjectGallery({ gallery, getImageSrc }: { gallery:GImg[]; getImageSrc:(img:any,fb?:string)=>string }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const slides = gallery.map(img => ({ src: getImageSrc(img, img.src) }))
  const openAt = (i:number) => { setIndex(i); setOpen(true) }

  return (
    <>
      {/* Row 1: full-width */}
      {gallery[0] && (
        <div className="mil-up mil-mb-30">
          <div className="mil-image-frame mil-horizontal" onClick={()=>openAt(0)} style={{cursor:'zoom-in'}}>
            <img src={getImageSrc(gallery[0],gallery[0].src)} alt={gallery[0].alt||''} loading="lazy" />
            <div className="mil-zoom-btn"><i className="fas fa-expand" style={{fontSize:13,color:'rgba(0,0,0,0.7)'}}></i></div>
          </div>
        </div>
      )}

      {/* Row 2: two squares */}
      {(gallery[1]||gallery[2]) && (
        <div className="row mil-mb-30">
          {[gallery[1],gallery[2]].map((img,i) => img && (
            <div key={img._key} className="col-lg-6 mil-up">
              <div className="mil-image-frame mil-square" onClick={()=>openAt(i+1)} style={{cursor:'zoom-in'}}>
                <img src={getImageSrc(img,img.src)} alt={img.alt||''} loading="lazy" />
                <div className="mil-zoom-btn"><i className="fas fa-expand" style={{fontSize:13,color:'rgba(0,0,0,0.7)'}}></i></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Row 3: full-width */}
      {gallery[3] && (
        <div className="mil-up mil-mb-30">
          <div className="mil-image-frame mil-horizontal" onClick={()=>openAt(3)} style={{cursor:'zoom-in'}}>
            <img src={getImageSrc(gallery[3],gallery[3].src)} alt={gallery[3].alt||''} loading="lazy" />
            <div className="mil-zoom-btn"><i className="fas fa-expand" style={{fontSize:13,color:'rgba(0,0,0,0.7)'}}></i></div>
          </div>
        </div>
      )}

      {/* Row 4: two verticals */}
      {(gallery[4]||gallery[5]) && (
        <div className="row">
          {[gallery[4],gallery[5]].map((img,i) => img && (
            <div key={img._key} className="col-lg-6 mil-up">
              <div className="mil-image-frame mil-vertical" onClick={()=>openAt(i+4)} style={{cursor:'zoom-in'}}>
                <img src={getImageSrc(img,img.src)} alt={img.alt||''} loading="lazy" />
                <div className="mil-zoom-btn"><i className="fas fa-expand" style={{fontSize:13,color:'rgba(0,0,0,0.7)'}}></i></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Extra overflow grid */}
      {gallery.length > 6 && (
        <div className="mil-up" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:30,marginTop:30}}>
          {gallery.slice(6).map((img,i) => (
            <div key={img._key} className="mil-image-frame mil-square" onClick={()=>openAt(i+6)} style={{cursor:'zoom-in'}}>
              <img src={getImageSrc(img,img.src)} alt={img.alt||''} loading="lazy" />
              <div className="mil-zoom-btn"><i className="fas fa-expand" style={{fontSize:13,color:'rgba(0,0,0,0.7)'}}></i></div>
            </div>
          ))}
        </div>
      )}

      <Lightbox open={open} close={()=>setOpen(false)} slides={slides} index={index} styles={{container:{backgroundColor:'rgba(0,0,0,0.95)'}}} />
    </>
  )
}
