'use client'

import { motion } from 'framer-motion'
import { Shield, Package, Globe } from 'lucide-react'

const info = [
  {
    icon: Shield,
    title: 'Payment Terms',
    items: ['Letter of Credit (L/C)', 'T/T Payment', 'D/A Terms Available'],
  },
  {
    icon: Package,
    title: 'Minimum Order',
    items: ['MOQ varies by material', 'Sample orders accepted', 'Bulk discounts available'],
  },
  {
    icon: Globe,
    title: 'Shipping',
    items: ['Global delivery network', 'FOB & CIF options', 'Full documentation support'],
  },
]

export function PaymentSection() {
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
          05 — Terms
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl"
        >
          Payment & MOQ
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 border border-primary p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {info.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((listItem) => (
                    <li key={listItem} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
