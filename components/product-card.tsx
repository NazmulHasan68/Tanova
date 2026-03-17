'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  product: {
    _id: string
    code: string
    name: string
    category: string
    shortDescription: string
    images: Array<{ url: string; publicId: string }>
  }
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const mainImage = product.images[0]?.url || '/placeholder.svg'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/products/${product._id}`}>
        <div className="group relative bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* View Button */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between text-foreground">
                <span className="text-sm font-medium">View Details</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-xs capitalize">
                {product.category}
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">
                {product.code}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
