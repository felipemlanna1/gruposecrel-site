import ScrollReveal from '../ui/ScrollReveal'

export default function ImpactStrip({ text, dark = false }) {
  return (
    <div className={`py-12 md:py-16 px-6 md:px-10 lg:px-20 relative overflow-hidden ${dark ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-background-alt)]'}`}>
      <ScrollReveal>
        <p className={`text-center font-[var(--font-display)] text-xl md:text-2xl lg:text-3xl font-semibold italic max-w-3xl mx-auto px-8 md:px-12 ${
          dark ? 'text-white/80' : 'text-[var(--color-text-muted)]'
        }`}>
          &ldquo;{text}&rdquo;
        </p>
      </ScrollReveal>
    </div>
  )
}
