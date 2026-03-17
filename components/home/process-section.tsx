'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const steps = [
  {
    title: 'Technical Inquiry & Requirement Alignment',
    description: 'We begin with a structured discussion to define article specifications, leather type, thickness tolerance, finishing requirements, compliance expectations, pricing framework, and delivery timeline.'
  },
  {
    title: 'Sample Development & Approval',
    description: 'Prototype samples, leather swatches, or lab-dips are developed through supervised production partners. Necessary refinements are made until full technical and commercial approval is confirmed.'
  },
  {
    title: 'Specification & Order Confirmation',
    description: 'All technical details, material breakdown, measurements, packaging instructions, order quantity, payment terms, and shipment schedule are formally finalized before bulk production.'
  },
  {
    title: 'Controlled Production Supervision',
    description: 'Bulk production is coordinated through selected partner facilities under structured monitoring to ensure material consistency, finishing accuracy, workmanship control, and timeline discipline.'
  },
  {
    title: 'Final Inspection & Documentation',
    description: 'Pre-shipment inspection verifies quality, measurements, packaging, and labeling compliance. Export documentation is prepared according to buyer requirements and international trade standards.'
  },
  {
    title: 'Shipment & Ongoing Support',
    description: 'Shipment is arranged as per agreed Incoterms, with continuous coordination until delivery and post-shipment communication support as required.'
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary/50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-primary text-sm tracking-[0.3em] uppercase"
          >
            Our Workflow
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Ordering Procedure
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px w-24 bg-primary mx-auto mt-8"
          />
        </div>

        <div className="relative mt-24">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={cn(
                  "flex flex-col lg:flex-row items-center",
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}>
                  {/* Content */}
                  <div className="w-full lg:w-1/2 px-4 lg:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={cn(
                        "p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-300",
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      )}
                    >
                      <span className="font-serif text-3xl text-primary/30 mb-4 block">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-2xl text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Dot on line */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 rounded-full bg-background border border-primary flex items-center justify-center"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </motion.div>
                  </div>

                  {/* Empty space for alternative side */}
                  <div className="w-1/2 hidden lg:block px-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
