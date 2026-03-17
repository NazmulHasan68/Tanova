'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: 'Industry Expertise',
    description: 'Decades of experience navigating the global leather market with precision and insight.',
  },
  {
    number: '02',
    title: 'Premium Sourcing',
    description: 'Direct partnerships with elite tanneries across Europe, South America, and Asia.',
  },
  {
    number: '03',
    title: 'Quality Control',
    description: 'Rigorous inspection protocols ensuring every hide meets luxury standards.',
  },
  {
    number: '04',
    title: 'Global Partnership',
    description: 'Seamless logistics and dedicated support for international B2B operations.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-primary text-sm tracking-[0.3em] uppercase"
        >
          03 — Why Choose Us
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl"
        >
          The Tanova Difference
        </motion.h2>

        <div className="mt-16 space-y-0">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border-t border-border py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 cursor-pointer transition-colors duration-500 hover:border-primary"
            >
              <span className="text-primary font-serif text-2xl md:text-3xl transition-transform duration-500 group-hover:translate-x-2">
                {reason.number}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors duration-500">
                  {reason.title}
                </h3>
              </div>
              <p className="md:max-w-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-border origin-left"
          />
        </div>
      </div>
    </section>
  )
}
