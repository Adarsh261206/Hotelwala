import SEO from '../components/ui/SEO'
import { useParams, Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import Breadcrumb from '../components/ui/Breadcrumb'
import ImageGallery from '../components/hotel/ImageGallery'
import HotelOverview from '../components/hotel/HotelOverview'
import AmenitiesGrid from '../components/hotel/AmenitiesGrid'
import NearbyAttractions from '../components/hotel/NearbyAttractions'
import PoliciesList from '../components/hotel/PoliciesList'
import RelatedHotels from '../components/hotel/RelatedHotels'
import hotels from '../data/hotels'
import { WA_NUMBER } from '../utils/constants'

export default function HotelDetails() {
  const { slug } = useParams()
  const hotel = hotels.find(h => h.id === slug)

  if (!hotel) {
    return (
      <Container className="py-20 text-center">
        <p className="text-xl text-muted">Hotel not found</p>
        <Link to="/hotels" className="text-primary hover:underline mt-4 inline-block">Browse all hotels</Link>
      </Container>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Hotels', path: '/hotels' },
    { label: hotel.name },
  ]

  return (
    <Container className="py-8 md:py-12">
      <SEO title={hotel.name} description={hotel.description} image={hotel.images[0]} />
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <ImageGallery images={hotel.images} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        <div className="lg:col-span-2 space-y-10">
          <HotelOverview hotel={hotel} />
          <AmenitiesGrid amenities={hotel.amenities} />
          <NearbyAttractions nearby={hotel.nearby} />
          <PoliciesList policies={hotel.policies} />
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] space-y-6">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Type</p>
              <p className="text-sm font-medium text-text">{hotel.type}</p>
            </div>

            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Rating</p>
              <p className="text-sm font-numbers font-medium text-text">{hotel.rating} / 5.0</p>
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${hotel.name} in ${hotel.city}. Please share more details.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-white text-center py-3.5 rounded-xl font-medium hover:bg-primary-dark transition-all duration-300"
            >
              Enquire Now
            </a>
            <Link
              to={`/hotels?state=${hotel.stateId}`}
              className="block w-full border border-border text-text text-center py-3.5 rounded-xl font-medium hover:bg-bg-secondary transition-all duration-300 text-sm"
            >
              View More in {hotel.stateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-20">
        <RelatedHotels hotels={hotels} currentHotel={hotel} />
      </div>
    </Container>
  )
}
