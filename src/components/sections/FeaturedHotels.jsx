import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import HotelCard from '../cards/HotelCard'
import Reveal, { StaggerReveal, RevealItem } from '../ui/Reveal'
import hotels from '../../data/hotels'

const featured = hotels.filter(h => h.rating >= 4.7).slice(0, 6)

export default function FeaturedHotels() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            title="Featured Hotels"
            subtitle="Our most exceptional properties, handpicked for their unparalleled service, location, and luxury."
          />
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map(hotel => (
            <RevealItem key={hotel.id}>
              <HotelCard hotel={hotel} />
            </RevealItem>
          ))}
        </StaggerReveal>
        <Reveal delay={0.2}>
          <div className="text-center mt-12">
            <Button to="/hotels" variant="outline" size="lg">
              View All Hotels
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
