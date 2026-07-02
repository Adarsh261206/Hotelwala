import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoLocationOutline, IoEyeOutline } from 'react-icons/io5'
import StarRating from '../ui/StarRating'
import Badge from '../ui/Badge'
import { formatPrice } from '../../utils/helpers'

export default function HotelCard({ hotel, variant = 'default' }) {
  const [hovered, setHovered] = useState(false)
  const isCompact = variant === 'compact'

  return (
    <Link
      to={`/hotels/${hotel.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-500 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative overflow-hidden ${isCompact ? 'h-44' : 'h-52 md:h-60'} bg-[#F5EFE7]`}>
        <img
          src={hotel.images[hovered && hotel.images[1] ? 1 : 0]}
          alt={hotel.name}
          className="w-full h-full object-cover transition-all duration-700 ease-out"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
          loading="lazy"
          onError={e => { e.target.style.display = 'none' }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        <div className="absolute top-3 left-3 z-10">
          <Badge variant="primary" size="sm">{hotel.type}</Badge>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-text px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg">
            <IoEyeOutline className="w-4 h-4" />
            Quick View
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={hotel.rating} size="sm" />
          <span className="text-xs text-muted font-numbers">{hotel.rating.toFixed(1)}</span>
        </div>

        <h3 className={`font-heading text-text mb-1 group-hover:text-primary transition-colors ${isCompact ? 'text-lg' : 'text-xl'}`}>
          {hotel.name}
        </h3>

        <div className="flex items-center gap-1 text-sm text-muted mb-3">
          <IoLocationOutline className="w-4 h-4" />
          <span>{hotel.city}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-numbers text-lg font-semibold text-text">
            {formatPrice(hotel.price)}
            <span className="text-xs text-muted font-normal"> / night</span>
          </span>
        </div>

        {!isCompact && hotel.amenities && (
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
            {hotel.amenities.slice(0, 3).map(a => (
              <Badge key={a} size="sm" variant="outline">{a}</Badge>
            ))}
            {hotel.amenities.length > 3 && (
              <Badge size="sm" variant="default">+{hotel.amenities.length - 3}</Badge>
            )}
          </div>
        )}
      </div>

      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-primary/0 group-hover:ring-primary/20 transition-all duration-500 pointer-events-none" />
    </Link>
  )
}
