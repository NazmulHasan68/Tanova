'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-primary text-sm tracking-[0.3em] uppercase"
        >
          02 — About
        </motion.span>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Left - Text */}
          <div className="lg:pr-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              Refining Leather. Defining Excellence.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-16 h-px bg-primary my-8 origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Tanova International is a premium leather and leather goods solutions provider from Bangladesh, 
              specializing in technically supervised leather processing through selected partner tanneries, 
              refined leather goods design, and production management.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed mt-6"
            >
              At TANOVA, leather is not treated as a commodity — it is a refined material shaped 
              through engineering knowledge and responsible production coordination. We supply 
              more than just materials; we deliver complete, export-oriented leather solutions.
            </motion.p>
          </div>

          {/* Vertical Divider */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary origin-top"
            style={{ height: '100%' }}
          />

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative lg:pl-16"
          >
            <div className="lg:hidden w-px h-24 bg-primary mx-auto mb-12" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2009&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 lg:left-10 bg-card border border-border p-6"
            >
              <p className="font-serif text-4xl text-primary">25+</p>
              <p className="text-sm text-muted-foreground tracking-wider uppercase mt-2">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
