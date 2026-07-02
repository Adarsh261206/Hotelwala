import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import ExperienceCard from '../cards/ExperienceCard'
import Reveal, { StaggerReveal, RevealItem } from '../ui/Reveal'
import experiences from '../../data/experiences'

export default function FeaturedExperiences() {
  return (
    <Section dark>
      <Container>
        <Reveal>
          <SectionHeading
            title="Featured Experiences"
            subtitle="From desert safaris to houseboat stays, discover extraordinary experiences across India."
          />
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map(exp => (
            <RevealItem key={exp.id}>
              <ExperienceCard experience={exp} />
            </RevealItem>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  )
}
