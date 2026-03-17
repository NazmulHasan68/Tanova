import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/ui/page-header'
import { ProcessSection } from '@/components/home/process-section'

export const metadata = {
  title: 'Ordering Procedure | Tanova International',
  description: 'Learn about our structured technical inquiry and ordering process for leather and leather goods.',
}

export default function OrderingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PageHeader 
        title="Ordering Procedure" 
        subtitle="Our Structured Technical Workflow"
        image="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=2070&auto=format&fit=crop"
      />
      <ProcessSection />
      <Footer />
    </main>
  )
}
