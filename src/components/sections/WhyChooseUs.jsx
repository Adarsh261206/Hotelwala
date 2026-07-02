import { IoRibbonOutline, IoShieldCheckmarkOutline, IoCompassOutline, IoHeadsetOutline } from 'react-icons/io5'
import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import FeatureCard from '../cards/FeatureCard'
import Reveal, { StaggerReveal, RevealItem } from '../ui/Reveal'

const features = [
  {
    icon: IoRibbonOutline,
    title: 'Expert Curation',
    description: 'Every hotel is personally vetted by our team of luxury travel experts. We evaluate design, service, amenities, and location to ensure only the finest properties are featured.',
  },
  {
    icon: IoShieldCheckmarkOutline,
    title: 'Trusted Quality',
    description: 'We maintain stringent quality standards. Each property on our platform meets rigorous criteria for luxury, service excellence, and guest satisfaction.',
  },
  {
    icon: IoCompassOutline,
    title: 'Pan-India Coverage',
    description: 'From the Himalayas to the backwaters of Kerala, our curated collection spans all 28 Indian states, offering unparalleled diversity in luxury accommodations.',
  },
  {
    icon: IoHeadsetOutline,
    title: 'Concierge Support',
    description: 'Our dedicated concierge team assists with personalised recommendations, special requests, and ensures a seamless experience from discovery to check-out.',
  },
]

export default function WhyChooseUs() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            title="Why Choose Hotelwala"
            subtitle="We redefine how discerning travellers discover India's finest hotels."
          />
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <RevealItem key={i}>
              <FeatureCard icon={f.icon} title={f.title} description={f.description} />
            </RevealItem>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  )
}
