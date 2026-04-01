import { useTranslation } from 'react-i18next'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import Section from '../layout/Section'
import AnimatedText from '../ui/AnimatedText'
import ScrollReveal from '../ui/ScrollReveal'
import FaqSchema from '../seo/FaqSchema'
import { faqs } from '../../data/content'

export default function Faq() {
  const { t } = useTranslation()

  return (
    <Section id="faq" className="bg-white">
      <FaqSchema faqs={faqs} />
      <div className="text-center mb-14">
        <AnimatedText
          text={t('faq.title')}
          tag="h2"
          className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`faq-${i}`} className="card-light overflow-hidden group">
                <Accordion.Trigger className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer">
                  <span className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] text-sm md:text-base group-hover:text-[var(--color-primary)] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown size={18} className="text-[var(--color-text-muted)] shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_200ms_ease] data-[state=closed]:animate-[slideUp_200ms_ease]">
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                    <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed">{faq.answer}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </ScrollReveal>
    </Section>
  )
}
