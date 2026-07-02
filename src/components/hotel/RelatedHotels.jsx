import HotelCard from '../cards/HotelCard'
import { getRelatedHotels } from '../../utils/helpers'

export default function RelatedHotels({ hotels, currentHotel }) {
  const related = getRelatedHotels(hotels, currentHotel, 3)

  if (!related.length) return null

  return (
    <div>
      <h3 className="text-2xl font-heading text-text mb-6">You May Also Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  )
}
