import { useState, useRef, useEffect } from 'react'
import Container from '../components/ui/Container'
import SEO from '../components/ui/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import IndiaMap from '../components/states/IndiaMap'
import HotelCard from '../components/cards/HotelCard'
import { getHotelsByState } from '../utils/helpers'
import states from '../data/states'
import hotels from '../data/hotels'

export default function States() {
  const [selectedState, setSelectedState] = useState(null)
  const listingRef = useRef(null)

  function handleStateSelect(state) {
    setSelectedState(state)
  }

  useEffect(() => {
    if (selectedState && listingRef.current) {
      listingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedState])

  // Get hotels for selected state + any state sharing same mapId (e.g. Ladakh & J&K)
  const stateHotels = selectedState
    ? hotels.filter(h => {
        const stateIds = states.filter(s => s.mapId === selectedState.mapId).map(s => s.id)
        return stateIds.includes(h.stateId)
      })
    : []

  return (
    <div className="py-10 md:py-16">
      <SEO title="Explore by State" description="Use our interactive India map to discover luxury hotels in every state. Click any state to explore premium accommodations." />
      <Container>
        <SectionHeading
          title="Explore India by State"
          subtitle="Click any state on the map below to discover premium hotels in that region."
          align="center"
        />

        <div className="my-10">
          <IndiaMap selectedState={selectedState} onStateSelect={handleStateSelect} />
        </div>

        <div ref={listingRef} className="mt-8">
          {selectedState ? (
            <div>
              <SectionHeading
                title={selectedState.name}
                subtitle={`${stateHotels.length} Premium Hotel${stateHotels.length !== 1 ? 's' : ''} Available`}
                align="left"
                className="mb-8"
              />

              {stateHotels.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stateHotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                  <p className="text-muted text-lg">Hotels coming soon for {selectedState.name}.</p>
                  <p className="text-sm text-muted mt-2">Explore other states on the map above.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
              <p className="text-xl font-heading text-text mb-2">Select a State</p>
              <p className="text-muted">Click any state on the map above to explore premium hotels across India.</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
