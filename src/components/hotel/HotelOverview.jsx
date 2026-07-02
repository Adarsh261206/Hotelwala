import { IoLocationOutline, IoShareSocialOutline, IoHeartOutline, IoLogoWhatsapp } from 'react-icons/io5'
import StarRating from '../ui/StarRating'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import { formatPrice } from '../../utils/helpers'

export default function HotelOverview({ hotel }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`Check out ${hotel.name} on Hotelwala: ${shareUrl}`)}`

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-heading text-text mb-2">{hotel.name}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <StarRating rating={hotel.rating} showValue />
            <Badge variant="primary" size="md">{hotel.type}</Badge>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted mt-3">
            <IoLocationOutline className="w-4 h-4" />
            <span>{hotel.city}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
            aria-label="Share on WhatsApp"
          >
            <IoLogoWhatsapp className="w-5 h-5" />
          </a>
          <button
            onClick={() => { if (navigator.share) navigator.share({ title: hotel.name, url: shareUrl }) }}
            className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-muted hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Share"
          >
            <IoShareSocialOutline className="w-5 h-5" />
          </button>
          <button
            className="w-10 h-10 rounded-xl bg-bg-secondary flex items-center justify-center text-muted hover:text-red-500 hover:bg-red-50 transition-all"
            aria-label="Save to favorites"
          >
            <IoHeartOutline className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-numbers font-semibold text-text">{formatPrice(hotel.price)}</span>
        <span className="text-sm text-muted">/ night</span>
      </div>

      <p className="text-base text-muted leading-relaxed">{hotel.description}</p>

      <Button to="/contact" variant="primary" size="lg">
        Enquire Now
      </Button>
    </div>
  )
}
