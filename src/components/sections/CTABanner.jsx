import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#1A1A1A]" />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 50%, #B88E5A 0%, transparent 50%), radial-gradient(circle at 75% 50%, #B88E5A 0%, transparent 50%)',
        }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary font-medium text-sm uppercase tracking-[0.3em] mb-4"
        >
          Begin Your Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading text-white leading-tight mb-4 max-w-3xl mx-auto"
        >
          Ready to Discover <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#D4A85A]">Extraordinary</span> Stays?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/60 max-w-xl mx-auto mb-8 text-base md:text-lg"
        >
          Explore India's most exceptional hotels, curated exclusively for discerning travellers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/states"
            className="bg-primary text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Explore States
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Enquire Now
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
