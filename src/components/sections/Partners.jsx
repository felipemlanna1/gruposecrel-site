import { useTranslation } from 'react-i18next'
import Section from '../layout/Section'
import AnimatedText from '../ui/AnimatedText'
import ScrollReveal from '../ui/ScrollReveal'

const partnerLogos = [
  { name: 'Microsoft', src: '/images/partners/microsoft.png', h: 'h-10 md:h-12' },
  { name: 'Oracle', src: '/images/partners/oracle.png', h: 'h-8 md:h-10' },
  { name: 'Fiserv', src: '/images/partners/fiserv.png', h: 'h-10 md:h-12' },
  { name: 'Luxottica', src: '/images/partners/luxottica.png', h: 'h-6 md:h-8' },
]

function MarqueeRow() {
  const items = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos]
  return (
    <div className="flex items-center gap-16 animate-marquee">
      {items.map((p, i) => (
        <div key={`${p.name}-${i}`} className="shrink-0 flex items-center px-8 py-4 rounded-2xl hover:bg-[var(--color-surface)] transition-colors">
          <img src={p.src} alt={p.name} className={`${p.h} w-auto object-contain`} loading="lazy" />
        </div>
      ))}
    </div>
  )
}

export default function Partners() {
  const { t } = useTranslation()

  return (
    <Section id="partners" className="bg-white overflow-hidden">
      <div className="text-center mb-12">
        <AnimatedText
          text={t('partners.title')}
          tag="h2"
          className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden py-4">
            <MarqueeRow />
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
