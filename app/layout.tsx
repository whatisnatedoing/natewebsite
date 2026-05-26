import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CookieBanner, ScrollProgress, Cursor, Preloader } from '@/components/layout/ClientComponents'

export const metadata: Metadata = {
  title: 'Nate Danbury — Design & Development',
  description: 'Branding, web development, and creative solutions by Nate Danbury.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <body>
        <Preloader />
        <CookieBanner />
        <ScrollProgress />
        <Cursor />
        <div className="mil-wrapper" id="top">
          <Navbar />
          <div className="mil-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
