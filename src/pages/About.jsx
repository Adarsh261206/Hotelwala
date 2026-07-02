import SEO from '../components/ui/SEO'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'

const stats = [
  { value: '55+', label: 'Premium Hotels' },
  { value: '28', label: 'Indian States' },
  { value: '8', label: 'Destinations' },
  { value: '4.6', label: 'Average Rating' },
]

const values = [
  {
    title: 'Curated Excellence',
    description: 'Every property on Hotelwala is personally evaluated and selected by our team of luxury travel experts.',
  },
  {
    title: 'Uncompromising Quality',
    description: 'We maintain the highest standards of luxury, service, and guest experience across every listing.',
  },
  {
    title: 'Authentic Discovery',
    description: 'We reveal India\'s most extraordinary hotels, from hidden gems to iconic landmarks.',
  },
]

export default function About() {
  return (
    <div>
      <SEO title="About" description="Learn about Hotelwala — India's premium hotel discovery platform. Our story, values, and commitment to luxury travel." />
      <section className="py-16 md:py-24 bg-[#1A1A1A] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium text-sm uppercase tracking-[0.3em] mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-6">
              Redefining Hotel Discovery <span className="italic font-light text-primary">in India</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Hotelwala was born from a simple belief: that discovering India's finest hotels should be as 
              exceptional as the stays themselves. We are India's first premium hotel discovery platform, 
              meticulously curating the country's most extraordinary accommodations.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p className="text-4xl md:text-5xl font-numbers font-semibold text-primary mb-2">{s.value}</p>
                <p className="text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-[#F5EFE7]">
        <Container>
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide every hotel we feature and every experience we curate."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <span className="text-3xl font-numbers text-primary font-semibold mb-4 block">0{i + 1}</span>
                <h3 className="text-xl font-heading text-text mb-3">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            title="Our Story"
            subtitle="How Hotelwala became India's trusted name in luxury hotel discovery."
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2020', title: 'The Idea', desc: 'Founded with a vision to transform how travellers discover luxury hotels in India.' },
                { year: '2021', title: 'First 10 Hotels', desc: 'Launched with a curated collection of 10 exceptional properties across 5 states.' },
                { year: '2022', title: 'Pan-India Expansion', desc: 'Expanded to cover all 28 states, curating over 30 premium hotels across the country.' },
                { year: '2023', title: 'Interactive Map Launch', desc: 'Launched the signature India map feature, making hotel discovery visual and intuitive.' },
                { year: '2024', title: '55+ Premium Hotels', desc: 'Today, Hotelwala features 55+ handpicked hotels and is trusted by discerning travellers nationwide.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="shrink-0 text-right w-16">
                    <span className="text-sm font-numbers text-primary font-semibold">{item.year}</span>
                  </div>
                  <div className="relative flex-1 pb-8 border-l-2 border-border pl-6">
                    <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                    <h4 className="font-heading text-lg text-text mb-1">{item.title}</h4>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
