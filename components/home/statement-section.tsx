'use client'

import { motion } from 'framer-motion'

export function StatementSection() {
  const words = "Sourcing the world's finest leather.".split(' ')

  return (
    <section className="py-32 lg:py-48 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-primary text-sm tracking-[0.3em] uppercase"
        >
          01 — Statement
        </motion.span>
        
        <h2 className="mt-12 font-serif text-4xl md:text-6xl lg:text-7xl leading-tight">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-24 h-px bg-primary mx-auto mt-12"
        />
      </div>
    </section>
  )
}
