'use client'

import { motion } from 'framer-motion'

export function AboutContent() {
  return (
    <div className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-4xl text-foreground mb-6 underline decoration-primary/30 underline-offset-8">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed italic font-serif border-l-4 border-primary pl-8">
                "To deliver reliable, market-aligned leather and leather goods solutions through deep technical expertise and uncompromising quality discipline."
              </p>
            </div>
            
            <div className="pt-8">
              <h2 className="font-serif text-4xl text-foreground mb-6 underline decoration-primary/30 underline-offset-8">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a globally recognized strategic partner for technically supervised leather solutions, 
                known for engineering knowledge, global experience, and responsible production coordination.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=2070&auto=format&fit=crop')` }}
            />
          </motion.div>
        </div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-secondary p-12 md:p-20 rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 text-primary/10 font-serif text-9xl select-none">"</div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-10">Our Philosophy & Model</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
              <p>
                At TANOVA, leather is not treated as a commodity — it is a refined material shaped through engineering knowledge, 
                global experience, and responsible production coordination. We supply leather and leather goods while managing 
                complete solutions with structured technical oversight.
              </p>
              <p>
                TANOVA does not currently operate its own tannery facilities. Leather processing and development are conducted 
                through carefully selected and technically supervised production partners, ensuring controlled systems, 
                consistent quality standards, and reliable export-ready results.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <div className="pt-12">
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl text-foreground mb-4">Leadership & Heritage</h2>
            <div className="h-px w-24 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-card border border-border rounded-3xl hover:border-primary/50 transition-colors duration-500"
            >
              <div className="mb-6 text-primary font-serif text-4xl opacity-50">01</div>
              <h3 className="font-serif text-3xl text-foreground mb-6">Technical Strategic Lead</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                One Managing Partner brings <span className="text-foreground font-semibold">29 years of expertise</span> in leather and leather goods production, 
                supported by participation in nearly forty-five international leather fairs between 2008 and 2025, 
                ensuring continuous alignment with global trends and buyer expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 bg-card border border-border rounded-3xl hover:border-primary/50 transition-colors duration-500"
            >
              <div className="mb-6 text-primary font-serif text-4xl opacity-50">02</div>
              <h3 className="font-serif text-3xl text-foreground mb-6">Global Strategy & Operations</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The other Managing Partner contributes <span className="text-foreground font-semibold">25 years of experience</span> in production management and international marketing, 
                combining operational precision with structured global communication.
              </p>
            </motion.div>
          </div>

        {/* Global Reach Section */}
        <div className="pt-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-foreground mb-4">Our Global Reach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse global exposure enables us to understand different technical specifications, compliance expectations, 
              and documentation standards required by international markets.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {['Japan', 'Hong Kong', 'South Korea', 'Europe', 'Mexico', 'United States'].map((country) => (
              <div key={country} className="px-6 py-3 border border-border rounded-full text-foreground font-serif hover:border-primary transition-colors">
                {country}
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
