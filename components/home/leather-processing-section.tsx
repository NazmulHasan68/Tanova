'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ChevronRight } from 'lucide-react'

const features = [
  'Controlled process parameters',
  'Consistent article development',
  'Customized finishing solutions',
  'Strict quality inspection',
  'Export-grade documentation',
]

export function LeatherProcessingSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('/leather/led2.jpg')` }}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-8 -right-8 bg-card border border-border p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-primary font-serif text-3xl">Quality</p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">Guaranteed</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-primary text-sm tracking-[0.3em] uppercase"
            >
              04 — Production
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8"
            >
              Leather Processing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed mb-10"
            >
              We coordinate structured leather processing through technically aligned production partners,
              ensuring the highest level of craftsmanship and technical precision.
            </motion.p>

            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 group hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-primary shadow-sm border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
