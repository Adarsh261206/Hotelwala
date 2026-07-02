import { Link } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5'

export default function ExperienceCard({ experience }) {
  return (
    <Link
      to={`/hotels?states=${experience.states[0]}`}
      className="group relative block rounded-xl overflow-hidden h-56 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500"
    >
      <div className="absolute inset-0 bg-[#F5EFE7]">
        <img
          src={experience.image}
          alt={experience.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          onError={e => { e.target.style.display = 'none' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-heading text-white mb-1">{experience.name}</h3>
        <p className="text-xs text-white/60 line-clamp-2 mb-2">{experience.description}</p>
        <span className="inline-flex items-center gap-1 text-xs text-white/80 group-hover:text-primary transition-colors">
          Explore <IoArrowForward className="w-3 h-3" />
        </span>
      </div>
    </Link>
  )
}
