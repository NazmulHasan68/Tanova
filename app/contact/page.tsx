// /app/contact/page.tsx
'use client'

import { Suspense } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/ui/page-header'
import ContactForm from '@/components/contact/contactform'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <PageHeader 
        title="Contact Us" 
        subtitle="Business Inquiries & Partnerships"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl text-foreground mb-6">
              Business Inquiry
            </h2>
            <p className="text-muted-foreground mb-12 leading-relaxed text-lg">
              For leather, leather goods, or TANOVA leather processing chemical-related inquiries, 
              please contact our commercial team. We welcome structured business discussions 
              and long-term international partnerships.
            </p>

            <div className="space-y-8">
              {/* Emails */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Email Addresses</h3>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Commercial:</span> export@tanova.com.bd
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">General:</span> info@tanova.com.bd
                    </p>
                    <p className="text-primary font-medium">www.tanova.com.bd</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Phone / WhatsApp</h3>
                  <div className="space-y-1">
                    <p className="text-muted-foreground">+880 1711 862446</p>
                    <p className="text-muted-foreground">+880 1729 095686</p>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Head Office</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      House # 7/2/C, Shyamolima-3 Road # Garden Street,<br /> 
                      Ring Road Shyamoli, Dhaka-1207 Bangladesh
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-lg">Corporate Office</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      BSCIC Tannery Industrial Estate Tannery Gate No. 2<br /> 
                      Horindha, Hemayetpur Savar, Dhaka-1340 Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            <h2 className="font-serif text-3xl text-foreground mb-8">Send a Message</h2>
            <Suspense fallback={<div>Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Map Integration */}
      <section className="w-full h-[500px] border-t border-border grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.029845341235!2d90.2246727!3d23.7738202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755940e8e04e9c7%3A0xe5a3c9a62243d6e!2sBSCIC%20Tannery%20Industrial%20Estate!5e0!3m2!1sen!2sbd!4v1710714800000!5m2!1sen!2sbd" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </main>
  )
}