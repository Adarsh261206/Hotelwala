import { Link } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5'

export default function DestinationCard({ destination }) {
  return (
    <Link
      to={`/hotels?city=${encodeURIComponent(destination.name)}`}
      className="group relative block rounded-xl overflow-hidden h-72 md:h-80 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500"
    >
      <div className="absolute inset-0 bg-[#F5EFE7]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          onError={e => { e.target.style.display = 'none' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-heading text-white mb-1">{destination.name}</h3>
        {destination.tagline && <p className="text-xs text-white/50 mb-1">{destination.tagline}</p>}
        <p className="text-sm text-white/70 mb-3 line-clamp-2">{destination.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/80 font-numbers">{destination.hotelCount} Hotels</span>
          <span className="flex items-center gap-1 text-sm text-white font-medium group-hover:gap-2 transition-all">
            Explore <IoArrowForward className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
