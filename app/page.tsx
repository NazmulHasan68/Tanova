import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSlider } from '@/components/home/hero-slider'
import { FeaturesSection } from '@/components/home/features-section'
import { CTASection } from '@/components/home/cta-section'
import connectDB from '@/lib/mongodb'
import HeroSlide from '@/models/HeroSlide'
import { AboutSection } from '@/components/home/about-section'
import { WhyChooseSection } from '@/components/home/why-choose-section'
import { ComplianceSection } from '@/components/home/compliance-section'
import { LeatherProcessingSection } from '@/components/home/leather-processing-section'

async function getHeroSlides() {
  try {
    await connectDB()
    const slides = await HeroSlide.find({ active: true }).sort({ order: 1 }).lean()
    return JSON.parse(JSON.stringify(slides))
  } catch (error) {
    console.error('Error fetching hero slides:', error)
    return []
  }
}

export default async function HomePage() {
  const slides = await getHeroSlides()

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSlider slides={slides} />
      {/* <FeaturesSection /> */}
      <AboutSection />
      <WhyChooseSection />
      <ComplianceSection />
      <LeatherProcessingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
