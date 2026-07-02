import SEO from '../components/ui/SEO'
import Hero from '../components/sections/Hero'
import FeaturedHotels from '../components/sections/FeaturedHotels'
import PopularDestinations from '../components/sections/PopularDestinations'
import LuxuryCollections from '../components/sections/LuxuryCollections'
import FeaturedExperiences from '../components/sections/FeaturedExperiences'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTABanner from '../components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <SEO description="Discover India's finest luxury hotels. Browse curated collections of premium accommodations across all 28 states." />
      <Hero />
      <FeaturedHotels />
      <PopularDestinations />
      <LuxuryCollections />
      <FeaturedExperiences />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  )
}
