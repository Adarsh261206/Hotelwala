import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { IoShieldCheckmark, IoStar, IoGlobe, IoChevronDown } from 'react-icons/io5'

const heroImages = [
  'https://images.unsplash.com/photo-1518860308377-800f02d5498a?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % heroImages.length), 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={heroImages[index]}
          src={heroImages[index]}
          alt="Luxury hotel in India"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-medium text-sm md:text-base uppercase tracking-[0.3em] mb-6"
        >
          India's Premium Hotel Network
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-white leading-tight mb-6 max-w-4xl mx-auto"
        >
          Discover India's<br />
          <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#D4A85A]">Finest Hotels</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base md:text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Curated luxury accommodations across every Indian state. 
          Handpicked for the discerning traveler.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="/states"
            className="bg-primary text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Explore States
          </Link>
          <Link
            to="/hotels"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            View All Hotels
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
        >
          {[
            { icon: IoShieldCheckmark, label: 'Curated Collection' },
            { icon: IoStar, label: 'Top Rated Hotels' },
            { icon: IoGlobe, label: 'All 28 States' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-primary" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <IoChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
    </section>
  )
}
