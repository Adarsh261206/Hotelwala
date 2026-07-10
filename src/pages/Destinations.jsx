import { Link } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5'
import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import MiniStateMap from '../components/ui/MiniStateMap'
import destinations from '../data/destinations'
import states from '../data/states'

const stateNames = {}
states.forEach(s => { stateNames[s.id] = s.name })

export default function Destinations() {
  return (
    <div className="py-10 md:py-16">
      <SEO title="Destinations" description="Explore India through its most iconic travel destinations, from the palaces of Rajasthan to the backwaters of Kerala." />
      <Container>
        <SectionHeading
          title="Popular Destinations"
          subtitle="Discover India's most iconic travel destinations, from the palaces of Rajasthan to the backwaters of Kerala."
          align="center"
        />

        <div className="space-y-8 md:space-y-12 mt-10">
          {destinations.map((dest, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={dest.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-500"
              >
                <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch`}>
                  <div className="md:w-2/5 bg-[#FAF8F5] flex items-center justify-center p-8 md:p-10">
                    <MiniStateMap stateId={dest.stateId} className="w-full" />
                  </div>
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <p className="text-xs text-primary font-medium uppercase tracking-[0.2em] mb-2">
                      {stateNames[dest.stateId] || dest.stateId}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-heading text-text mb-2">{dest.name}</h2>
                    <p className="text-muted leading-relaxed mb-6">{dest.description}</p>
                    <div className="flex items-center gap-4">
                      <Link
                        to={`/hotels?city=${encodeURIComponent(dest.name)}`}
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary-dark transition-all duration-300"
                      >
                        View Hotels <IoArrowForward className="w-4 h-4" />
                      </Link>
                      <span className="text-sm text-muted font-numbers">{dest.hotelCount} hotel{dest.hotelCount !== 1 ? 's' : ''}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
