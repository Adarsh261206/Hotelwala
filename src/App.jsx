import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import HotelDetails from './pages/HotelDetails'
import Destinations from './pages/Destinations'
import States from './pages/States'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-1 ${isHome ? '' : 'pt-16 md:pt-20'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/hotels" element={<PageTransition><Hotels /></PageTransition>} />
            <Route path="/hotels/:slug" element={<PageTransition><HotelDetails /></PageTransition>} />
            <Route path="/destinations" element={<PageTransition><Destinations /></PageTransition>} />
            <Route path="/states" element={<PageTransition><States /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
