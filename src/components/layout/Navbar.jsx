import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoSearch, IoClose, IoMenu, IoLogoWhatsapp } from 'react-icons/io5'
import useScrollPosition from '../../hooks/useScrollPosition'
import { NAV_LINKS, WA_NUMBER } from '../../utils/constants'
import SearchBar from '../ui/SearchBar'
import Button from '../ui/Button'

export default function Navbar() {
  const scrolled = useScrollPosition(80)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-[#FAF8F5]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        {scrolled || !isHome ? (
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/60 to-[#FAF8F5]/40" />
        ) : null}

        <nav className="relative max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-2 shrink-0 z-10">
            <span className={`text-2xl md:text-3xl font-heading font-bold tracking-wide transition-colors duration-300 ${scrolled || !isHome ? 'text-text' : 'text-white'}`}>
              Hotelwala
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 z-10">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-primary after:transition-all after:duration-300 ${
                  pathname === link.path
                    ? 'text-primary after:w-full'
                    : `${scrolled || !isHome ? 'text-text' : 'text-white/90'} after:w-0 hover:after:w-full`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 z-10">
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled || !isHome ? 'text-text hover:bg-bg-secondary' : 'text-white/90 hover:bg-white/10'
              }`}
              aria-label="Open search"
            >
              <IoSearch className="w-5 h-5" />
            </button>

            <div className="hidden md:block">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi, I\'m interested in booking a hotel through Hotelwala. Please share more details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-all duration-300"
              >
                <IoLogoWhatsapp className="w-4 h-4" />
                Enquire Now
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-lg lg:hidden transition-colors ${
                scrolled || !isHome ? 'text-text hover:bg-bg-secondary' : 'text-white/90 hover:bg-white/10'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <IoClose className="w-6 h-6" /> : <IoMenu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] pt-20 lg:hidden">
          <nav className="flex flex-col px-6 py-8 gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-lg py-3 px-4 rounded-lg transition-colors ${
                  pathname === link.path ? 'text-primary bg-bg-secondary font-medium' : 'text-text hover:bg-bg-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi, I\'m interested in booking a hotel through Hotelwala. Please share more details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white w-full py-3.5 rounded-xl text-base font-medium hover:bg-[#20BD5A] transition-all duration-300"
              >
                <IoLogoWhatsapp className="w-5 h-5" />
                Enquire Now
              </a>
            </div>
          </nav>
        </div>
      )}

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-xl flex items-start justify-center pt-24 px-6">
          <div className="w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <span className="font-heading text-2xl text-text">Search</span>
              <button onClick={() => setSearchOpen(false)} className="p-2 text-text hover:text-primary" aria-label="Close search">
                <IoClose className="w-6 h-6" />
              </button>
            </div>
            <SearchBar large onSearch={q => { if (q.trim()) window.location.href = `/hotels?search=${encodeURIComponent(q)}` }} />
            <p className="text-sm text-muted mt-4 text-center">Search for hotels, destinations, or states</p>
          </div>
        </div>
      )}
    </>
  )
}
