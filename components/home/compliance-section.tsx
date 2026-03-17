'use client'

import { motion } from 'framer-motion'
import { Shield, Leaf, Heart, Users, CheckCircle2 } from 'lucide-react'

const standards = [
  'LWG environmental protocols',
  'BSCI compliance standards',
  'SEDEX audit systems',
  'Labor, health, safety, and environmental (HSE) standards',
  'ZDHC chemical management frameworks',
]

export function ComplianceSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase">
              05 — Standards
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8">
              Compliance & Global Standards
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Our leadership team is technically familiar with global environmental and social governance, 
              enabling us to coordinate production in alignment with global buyer expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{standard}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-primary/5 rounded-full flex items-center justify-center p-12">
              <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-full flex items-center justify-center animate-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary opacity-20" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6 shadow-xl">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-2">Global Alignment</h3>
                <p className="text-sm text-muted-foreground">Certified Production Coordination</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
