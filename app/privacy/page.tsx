'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0f0e0d] text-[#f0ece4]">
      <Navigation />

      <section className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-[#b5843a] mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-[#f0ece4]/80 mb-6">
          At Tanex International, we respect your privacy and are committed to protecting your personal information.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">Information We Collect</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              We collect information you provide when contacting us, subscribing to our newsletter, or using our services.
              This may include your name, email, phone number, company, and message details.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">How We Use Information</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              Your information is used solely to respond to inquiries, provide customer support, and improve our services.
              We never sell or share your personal data with third-party marketers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">Data Security</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              We implement industry-standard measures to protect your data. Only authorized personnel have access to sensitive information.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">Cookies & Tracking</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              Our website may use cookies to enhance user experience. No personal information is stored in cookies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-2 text-[#b5843a]">Contact Us</h2>
            <p className="text-[#f0ece4]/80 text-sm leading-relaxed">
              If you have any questions about our Privacy Policy, please contact us at <a href="mailto:info@tanex.com.bd" className="text-[#b5843a] underline">info@tanex.com.bd</a>.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}