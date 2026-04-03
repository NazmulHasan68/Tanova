'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Users, Zap, Factory, GraduationCap, FileText, Beaker, Globe, Scale, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: GraduationCap,
    title: 'Expert Leadership',
    description: 'Operating by a bunch of expert Leather Engineers with 25+ years of technical industry experience.',
  },
  {
    icon: Factory,
    title: 'Complete Solutions',
    description: 'Providing leather and leather goods solutions under one brand, from raw hide to finished products.',
  },
  {
    icon: ShieldCheck,
    title: 'Strong Supervision',
    description: 'Strong supervision and monitored processing at every production stage ensures consistency.',
  },
  {
    icon: FileText,
    title: 'Export Documentation',
    description: 'Expertise in export-oriented documentation and structured international coordination.',
  },
  {
    icon: Beaker,
    title: 'Technical Support',
    description: 'European-technology leather processing chemical support and compliance-aware alignment.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership Mindset',
    description: 'Flexible, scalable production capabilities built on a long-term partnership commitment.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-primary text-sm tracking-[0.3em] uppercase"
            >
              02 — Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
            >
              Why Choose Tanova
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-sm"
          >
            Our company is operated by a team of expert Leather Engineers, ensuring technical excellence at every step.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
