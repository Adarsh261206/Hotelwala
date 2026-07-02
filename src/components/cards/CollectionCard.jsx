import { Link } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5'

export default function CollectionCard({ collection }) {
  return (
    <Link
      to={`/hotels?collection=${collection.slug}`}
      className="group relative block rounded-xl overflow-hidden h-64 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500"
    >
      <div className="absolute inset-0 bg-[#F5EFE7]">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          onError={e => { e.target.style.display = 'none' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-heading text-white mb-1">{collection.name}</h3>
        <p className="text-sm text-white/60 mb-3 line-clamp-2">{collection.description}</p>
        <span className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-primary transition-colors">
          View Collection <IoArrowForward className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  )
}
