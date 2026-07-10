import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import DestinationCard from '../components/cards/DestinationCard'
import destinations from '../data/destinations'

export default function Destinations() {
  return (
    <div className="py-10 md:py-16">
      <SEO title="Destinations" description="Explore India through its most captivating travel destinations — beaches, mountains, heritage, wildlife, and more." />
      <Container>
        <SectionHeading
          title="Destinations"
          subtitle="Discover India's most iconic travel destinations, from the palaces of Rajasthan to the backwaters of Kerala."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </Container>
    </div>
  )
}
