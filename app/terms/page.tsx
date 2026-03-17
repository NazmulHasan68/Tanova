'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0f0e0d] text-[#f0ece4]">
      <Navigation />

      <section className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-[#b5843a] mb-6 text-center">
          Terms of Service
        </h1>
        <p className="text-[#f0ece4]/80 mb-6">
          These Terms of Service govern your use of the Tanex International website and services.
          By accessing our website, you agree to comply with these terms.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">Use of Website</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              You may use our website for informational and business purposes only. Unauthorized commercial use, copying, or reproduction is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">Intellectual Property</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              All content, images, logos, and text on this site are property of Tanex International. You may not use them without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">Limitation of Liability</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              Tanex International is not responsible for any direct or indirect damages resulting from the use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">Governing Law</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              These Terms are governed by the laws of Bangladesh. Any disputes arising will be subject to the jurisdiction of local courts.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">Contact Us</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              For any questions about these Terms of Service, contact us at <a href="mailto:info@tanex.com.bd" className="text-[#b5843a] underline">info@tanex.com.bd</a>.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}