import { Link } from 'react-router-dom'
import { IoCall, IoMail, IoLocationOutline } from 'react-icons/io5'
import Container from '../ui/Container'
import { FOOTER_QUICK_LINKS, SOCIAL_LINKS, SITE_DESCRIPTION } from '../../utils/constants'
import states from '../../data/states'

const popularStates = states.filter(s => ['goa', 'kerala', 'rajasthan', 'himachal-pradesh', 'uttarakhand', 'jammu-kashmir'].includes(s.id))

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <span className="text-2xl font-heading font-bold text-white inline-block mb-4">Hotelwala</span>
            <p className="text-sm text-white/60 leading-relaxed mb-6">{SITE_DESCRIPTION}</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map(link => (
                <a key={link.label} href={link.url} className="text-white/40 hover:text-primary transition-colors text-sm" aria-label={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_QUICK_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-6">Popular States</h4>
            <ul className="space-y-3">
              {popularStates.map(state => (
                <li key={state.id}>
                  <Link to={`/states`} className="text-sm text-white/50 hover:text-primary transition-colors">
                    {state.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IoCall className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">+91 8286 521 111</span>
              </li>
              <li className="flex items-start gap-3">
                <IoMail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">himanshu@hotelwala.net</span>
              </li>
              <li className="flex items-start gap-3">
                <IoLocationOutline className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">1, Ashok Apt. MG Road, Opp. Naupada Police Stn.,<br />Thane (W) - 400602, India</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <span>&copy; {new Date().getFullYear()} Hotelwala. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
