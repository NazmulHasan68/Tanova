'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle?: string
  image?: string
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {image ? (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-secondary" />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-7xl text-white mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl tracking-widest uppercase"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
