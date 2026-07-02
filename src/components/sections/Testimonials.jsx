import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../cards/TestimonialCard'
import Reveal, { StaggerReveal, RevealItem } from '../ui/Reveal'
import testimonials from '../../data/testimonials'

export default function Testimonials() {
  return (
    <Section dark>
      <Container>
        <Reveal>
          <SectionHeading
            title="What Our Guests Say"
            subtitle="Real stories from discerning travellers who discovered their perfect stay through Hotelwala."
          />
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map(t => (
            <RevealItem key={t.id}>
              <TestimonialCard testimonial={t} />
            </RevealItem>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  )
}
