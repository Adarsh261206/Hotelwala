import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import CollectionCard from '../cards/CollectionCard'
import Reveal, { StaggerReveal, RevealItem } from '../ui/Reveal'
import collections from '../../data/collections'

export default function LuxuryCollections() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            title="Luxury Collections"
            subtitle="Browse our curated collections designed for every kind of luxury traveller."
          />
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map(col => (
            <RevealItem key={col.id}>
              <CollectionCard collection={col} />
            </RevealItem>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  )
}
