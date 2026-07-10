import { IoLocationOutline, IoShareSocialOutline, IoHeartOutline, IoLogoWhatsapp } from 'react-icons/io5'
import StarRating from '../ui/StarRating'
import Badge from '../ui/Badge'
import { WA_NUMBER } from '../../utils/constants'

export default function HotelOverview({ hotel }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const whatsappUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${hotel.name} in ${hotel.city}. Please share more details.`)}`

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

      <p className="text-base text-muted leading-relaxed">{hotel.description}</p>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-xl text-base font-medium hover:bg-[#20BD5A] transition-all duration-300"
      >
        <IoLogoWhatsapp className="w-5 h-5" />
        Enquire on WhatsApp
      </a>
    </div>
  )
}
