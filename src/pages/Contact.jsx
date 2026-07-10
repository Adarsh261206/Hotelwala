import SEO from '../components/ui/SEO'
import { useForm } from 'react-hook-form'
import { IoCall, IoMail, IoLocationOutline, IoLogoWhatsapp } from 'react-icons/io5'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import { WA_NUMBER } from '../utils/constants'

const contactCards = [
  {
    icon: IoCall,
    title: 'Phone',
    lines: ['+91 1800 123 4567', '+91 22 4567 8900'],
  },
  {
    icon: IoMail,
    title: 'Email',
    lines: ['concierge@hotelwala.com', 'partnerships@hotelwala.com'],
  },
  {
    icon: IoLocationOutline,
    title: 'Office',
    lines: ['42 Luxury Lane, Andheri East', 'Mumbai 400093, India'],
  },
]

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitted }, reset } = useForm()

  function onSubmit(data) {
    const message = `Hi Hotelwala, I'd like to enquire about a hotel.%0A%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0AMessage: ${data.message}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, '_blank')
    reset()
  }

  return (
    <div className="py-10 md:py-16">
      <SEO title="Contact" description="Get in touch with the Hotelwala concierge team. Send an enquiry and discover your perfect luxury stay in India." />
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Our concierge team is ready to help you discover the perfect luxury stay."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div key={i} className="bg-white rounded-xl p-6 text-center shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <div className="w-12 h-12 rounded-xl bg-[#F5EFE7] flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-text mb-2">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-sm text-muted">{line}</p>
                ))}
              </div>
            )
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
          <h3 className="text-2xl font-heading text-text mb-6">Send an Enquiry</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Full Name</label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full bg-[#FAF8F5] border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                  className="w-full bg-[#FAF8F5] border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text mb-1.5">Phone</label>
              <input
                id="phone"
                type="tel"
                {...register('phone', { required: 'Phone is required' })}
                className="w-full bg-[#FAF8F5] border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="+91 98765 43210"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Message</label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: 'Message is required' })}
                className="w-full bg-[#FAF8F5] border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell us about your travel preferences..."
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#20BD5A] transition-all duration-300"
            >
              <IoLogoWhatsapp className="w-5 h-5" />
              Send Enquiry via WhatsApp
            </button>
          </form>
        </div>

        <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)] h-64 flex items-center justify-center">
          <div className="text-center text-muted">
            <IoLocationOutline className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">42 Luxury Lane, Andheri East, Mumbai 400093</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
