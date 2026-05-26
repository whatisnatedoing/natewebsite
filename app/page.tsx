import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import PortfolioSlider from '@/components/sections/PortfolioSlider'
import Reviews from '@/components/sections/Reviews'
import Partners from '@/components/sections/Partners'
import ScrollReveal from '@/components/ui/ScrollReveal'
export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <Services />
      <PortfolioSlider />
      <Reviews />
      <Partners />
    </>
  )
}
