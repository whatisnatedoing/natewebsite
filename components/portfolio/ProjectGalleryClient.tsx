'use client'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

interface GalleryImage {
  src: string
  alt: string
  layout: 'horizontal' | 'square' | 'vertical'
}

interface Props {
  images: GalleryImage[]
}

export default function ProjectGalleryClient({ images }: Props) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const openAt = (i: number) => { setIndex(i); setOpen(true) }

  const slides = images.map((img) => ({ src: img.src, alt: img.alt }))

  return (
    <>
      {/* Gallery Grid — full width horizontal image first, then 2-col below */}
      <div className="row mil-up" style={{ gap: '0 0', rowGap: 30 }}>
        {images.map((img, i) => (
          <div
            key={i}
            className={
              img.layout === 'horizontal' ? 'col-lg-12' :
              img.layout === 'vertical'   ? 'col-lg-4 col-md-6' :
              'col-lg-6 col-md-6'
            }
            style={{ marginBottom: 30 }}
          >
            <div
              className={`mil-image-frame mil-${img.layout}`}
              style={{ cursor: 'zoom-in' }}
              onClick={() => openAt(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="mil-zoom-btn">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
        styles={{
          container: { backgroundColor: 'rgba(0,0,0,0.95)' },
        }}
      />
    </>
  )
}
