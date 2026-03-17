'use client'

import { motion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Price', description: 'Competitive quotation' },
  { number: '02', title: 'Contract', description: 'Terms finalized' },
  { number: '03', title: 'L/C', description: 'Payment secured' },
  { number: '04', title: 'Delivery', description: 'Global shipping' },
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-primary text-sm tracking-[0.3em] uppercase"
        >
          04 — Process
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl"
        >
          How We Work
        </motion.h2>

        <div className="mt-20 relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-primary via-primary to-transparent hidden md:block origin-left"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step indicator */}
                <div className="w-16 h-16 rounded-full bg-card border border-primary flex items-center justify-center mb-6 relative z-10">
                  <span className="font-serif text-xl text-primary">{step.number}</span>
                </div>
                
                <h3 className="font-serif text-2xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
