import { Link } from 'react-router-dom'
import { IoArrowForward, IoStar } from 'react-icons/io5'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal, { StaggerReveal, RevealItem } from '../ui/Reveal'
import primeLocations from '../../data/primeLocations'
import hotels from '../../data/hotels'
import states from '../../data/states'

const stateNameMap = {}
states.forEach(s => { stateNameMap[s.id] = s.name })

function getPrimeCount(prime) {
  return hotels.filter(h => {
    if (prime.city) return h.city === prime.city
    return prime.stateIds.includes(h.stateId)
  }).length
}

function getHeroHotel(prime) {
  return hotels.find(h => h.id === prime.heroHotelId)
}

export default function PrimeLocations() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-primary font-medium text-xs uppercase tracking-[0.25em] mb-2">Our Prime Service Locations</p>
              <h2 className="text-3xl md:text-4xl font-heading text-text">Where We Serve Best</h2>
              <p className="text-sm text-muted mt-2 max-w-xl">Kashmir to Northeast, these 10 regions are our core strength — curated hotels, on-ground support & best rates.</p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Prime Service Network
            </span>
          </div>
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {primeLocations.map(prime => {
            const hero = getHeroHotel(prime)
            const count = getPrimeCount(prime)
            const link = prime.city
              ? `/hotels?city=${encodeURIComponent(prime.city)}`
              : `/hotels?state=${prime.stateIds[0]}`
            // fallback image from hero or first hotel image in prime
            const img = hero?.images?.[0] || ''

            return (
              <RevealItem key={prime.id}>
                <Link
                  to={link}
                  className="group relative block rounded-2xl overflow-hidden h-[320px] shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-[#F5EFE7]">
                    {img ? (
                      <img
                        src={img}
                        alt={prime.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        onError={e => { e.target.style.display = 'none' }}
                      />
                    ) : null}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/0" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">Prime</span>
                    {hero && (
                      <span className="bg-white/90 backdrop-blur text-text text-[10px] font-medium px-2 py-1 rounded-full flex items-center gap-1">
                        <IoStar className="w-3 h-3 text-amber-400" /> {hero.rating.toFixed(1)}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-heading text-white mb-1">{prime.label}</h3>
                    <p className="text-[11px] text-white/60 uppercase tracking-widest mb-2">{prime.tagline}</p>
                    <p className="text-xs text-white/70 line-clamp-2 mb-3">{prime.description}</p>
                    {hero && (
                      <p className="text-[11px] text-white/80 mb-3">Hero: <span className="text-white font-medium">{hero.name}</span></p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/90 font-numbers">{count} Hotels</span>
                      <span className="flex items-center gap-1 text-xs text-white font-medium group-hover:gap-2 transition-all">
                        Explore <IoArrowForward className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            )
          })}
        </StaggerReveal>

        <p className="text-center text-xs text-muted mt-6">We also serve all other states across India — these 10 are our prime focus with dedicated on-ground teams.</p>
      </Container>
    </section>
  )
}
