// /app/contact/page.tsx
'use client'

import { Suspense } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import ContactForm from '@/components/contact/contactform'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 bg-secondary/30 text-center">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
          Contact Us
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ready to source premium materials? Our team is here to help.
        </p>
      </section>

      <section className="py-16 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-serif text-2xl text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Whether you have questions about our products, need a custom quote, 
            or want to discuss partnership opportunities, we&apos;re here to help.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Address</h3>
                <p className="text-muted-foreground">
                  123 Leather Lane<br />
                  Business District, City 10001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">info@tanova.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-12 p-6 bg-secondary/50 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
            <p className="text-muted-foreground text-sm">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <Suspense fallback={<div>Loading form...</div>}>
          <ContactForm />
        </Suspense>
      </section>

      <Footer />
    </main>
  )
}