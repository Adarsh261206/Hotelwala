import StarRating from '../ui/StarRating'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
      <StarRating rating={testimonial.rating} size="sm" className="mb-4" />
      <p className="text-text leading-relaxed mb-6 italic">"{testimonial.text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#F5EFE7] flex items-center justify-center text-sm font-medium text-muted">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-text">{testimonial.name}</p>
          <p className="text-xs text-muted">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}
