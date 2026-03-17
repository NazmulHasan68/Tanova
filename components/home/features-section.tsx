'use client'

import { motion } from 'framer-motion'
import { Award, Globe, Shield, Truck } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Global Sourcing',
    description: 'Access premium materials from trusted suppliers across Italy, Argentina, and beyond.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Every product undergoes rigorous quality checks to meet the highest industry standards.',
  },
  {
    icon: Shield,
    title: 'Trusted Partner',
    description: 'Over 20 years of experience serving leading manufacturers worldwide.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Efficient logistics network ensuring timely delivery to your facility.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Why Choose Tanova
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine decades of expertise with a commitment to excellence, 
            delivering premium materials that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
