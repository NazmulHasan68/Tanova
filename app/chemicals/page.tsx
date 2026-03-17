'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { Skeleton } from '@/components/ui/skeleton'
import { Beaker, Shield, Leaf, Award } from 'lucide-react'

interface Product {
  _id: string
  code: string
  name: string
  category: string
  shortDescription: string
  images: Array<{ url: string; publicId: string }>
}

const features = [
  {
    icon: Beaker,
    title: 'Premium Formulations',
    description: 'Industry-leading chemical compounds designed for optimal leather treatment.',
  },
  {
    icon: Shield,
    title: 'Safety Certified',
    description: 'All products meet international safety and environmental standards.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Options',
    description: 'Sustainable alternatives that minimize environmental impact.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Rigorous testing ensures consistent quality in every batch.',
  },
]

export default function ChemicalsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products?category=chemicals')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0f0e0d] text-[#f0ece4]">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#1a1714]/80">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl mb-4 text-[#f0ece4]">
              Leather Chemicals
            </h1>
            <p className="max-w-2xl mx-auto text-[#f0ece4]/80">
              Professional-grade chemicals for leather tanning, finishing, and treatment. Trusted by manufacturers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-b border-[#b5843a]/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#b5843a]/20 text-[#b5843a] mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2 text-[#f0ece4]">{feature.title}</h3>
                <p className="text-sm text-[#f0ece4]/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-12 text-[#b5843a]">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Quality Sourcing', desc: 'We source chemicals from trusted global suppliers ensuring safety and efficacy.' },
              { num: '02', title: 'Rigorous Testing', desc: 'All products undergo multi-stage testing for compliance with international standards.' },
              { num: '03', title: 'Safe Packaging', desc: 'Packaged safely to maintain chemical integrity during transport and storage.' },
              { num: '04', title: 'Global Delivery', desc: 'We deliver on time to clients worldwide with all necessary documentation.' },
            ].map((step) => (
              <div key={step.num} className="space-y-4">
                <div className="text-[#b5843a] font-bold text-2xl">{step.num}</div>
                <h3 className="font-semibold text-xl">{step.title}</h3>
                <p className="text-[#f0ece4]/70 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl mb-12 text-[#b5843a]">Trusted by Global Manufacturers</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { quote: 'Tanex Chemicals provides unmatched quality and reliability for our tannery operations.', author: 'Leather Manufacturer, Germany' },
              { quote: 'Safe, eco-friendly, and efficient chemicals that meet all international standards.', author: 'Leather Supplier, Italy' },
              { quote: 'Reliable chemical supply with fast global delivery, excellent service.', author: 'Footwear Brand, USA' },
            ].map((item, index) => (
              <div key={index} className="bg-[#1e1b17] p-6 rounded-xl shadow-lg">
                <p className="text-[#f0ece4]/70 mb-4">“{item.quote}”</p>
                <span className="font-semibold text-[#f0ece4]">{item.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 text-[#b5843a]">Our Chemical Products</h2>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square rounded-lg bg-[#1e1b17]" />
                  <Skeleton className="h-4 w-2/3 bg-[#1e1b17]" />
                  <Skeleton className="h-4 w-full bg-[#1e1b17]" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 bg-[#1a1714]/50 rounded-lg">
              <Beaker className="h-12 w-12 text-[#b5843a] mx-auto mb-4" />
              <p className="text-[#f0ece4]/70 text-lg mb-2">No chemical products available yet.</p>
              <p className="text-sm text-[#f0ece4]/50">Check back soon for our complete chemical catalog.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard key={product._id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}