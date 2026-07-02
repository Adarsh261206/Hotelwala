import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import DestinationCard from '../cards/DestinationCard'
import Reveal, { StaggerReveal, RevealItem } from '../ui/Reveal'
import destinations from '../../data/destinations'

export default function PopularDestinations() {
  return (
    <Section dark>
      <Container>
        <Reveal>
          <SectionHeading
            title="Popular Destinations"
            subtitle="Explore India's most sought-after travel destinations, each offering unique luxury experiences."
          />
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.slice(0, 8).map(dest => (
            <RevealItem key={dest.id}>
              <DestinationCard destination={dest} />
            </RevealItem>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  )
}
