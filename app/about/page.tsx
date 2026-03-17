import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/ui/page-header'
import { AboutContent } from '@/components/about/about-content'

export const metadata = {
  title: 'About Us | Tanova International',
  description: 'Learn about our mission, vision, and the leadership behind Tanova International.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader 
        title="Our Story" 
        subtitle="Mission, Vision & Leadership"
        image="https://images.unsplash.com/photo-1590674839785-70972238473a?q=80&w=2070&auto=format&fit=crop"
      />
      <AboutContent />
      <Footer />
    </main>
  )
}
