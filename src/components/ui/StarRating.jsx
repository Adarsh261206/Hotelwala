import { IoStar, IoStarHalf, IoStarOutline } from 'react-icons/io5'

export default function StarRating({ rating = 0, size = 'sm', showValue = false, className = '' }) {
  const sizes = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' }
  const iconSize = sizes[size] || sizes.sm

  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5 ? 1 : 0
  const empty = 5 - full - half

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[...Array(full)].map((_, i) => (
        <IoStar key={`full-${i}`} className={`${iconSize} text-primary`} />
      ))}
      {half === 1 && <IoStarHalf className={`${iconSize} text-primary`} />}
      {[...Array(empty)].map((_, i) => (
        <IoStarOutline key={`empty-${i}`} className={`${iconSize} text-border`} />
      ))}
      {showValue && <span className="ml-1.5 text-sm font-numbers text-muted">{rating.toFixed(1)}</span>}
    </div>
  )
}
