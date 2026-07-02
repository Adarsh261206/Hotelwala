import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import Container from '../ui/Container'
import Section from '../ui/Section'
import SectionHeading from '../ui/SectionHeading'
import Reveal, { StaggerReveal, RevealItem } from '../ui/Reveal'
import faqs from '../../data/faqs'

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left transition-colors hover:text-primary"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-text pr-4">{faq.question}</span>
        <IoChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Hotelwala."
          />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="max-w-2xl mx-auto bg-white rounded-xl px-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
            {faqs.map(faq => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
