import { useTranslation } from 'react-i18next'
import { Phone, Headphones, ArrowRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import AnimatedText from '../ui/AnimatedText'
import Button from '../ui/Button'
import { siteData } from '../../data/content'

export default function CtaFinal() {
  const { t } = useTranslation()

  return (
    <section id="cta-final" className="section-dark px-6 py-20 md:px-10 md:py-24 lg:px-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--color-secondary)]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[var(--container-max)] text-center max-w-3xl">
        <AnimatedText
          text={t('cta_final.title')}
          tag="h2"
          className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">{t('cta_final.subtitle')}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              href={`https://wa.me/${siteData.contact.whatsappSales}?text=${encodeURIComponent('Olá! Gostaria de agendar uma demonstração gratuita do NEXGEN.')}`}
              variant="accent"
              className="text-base"
            >
              <Phone size={18} /> {t('cta_final.cta_demo')}
            </Button>
            <Button href={`https://wa.me/${siteData.contact.whatsappSales}`} variant="ghost-light" className="text-base">
              {t('cta_final.cta_whatsapp')} <ArrowRight size={18} />
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <a href={`https://wa.me/${siteData.contact.whatsappSales}`} target="_blank" rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 group hover:bg-white/10 transition-colors min-h-[44px]">
              <div className="w-11 h-11 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[var(--color-accent)]" />
              </div>
              <div className="text-left">
                <p className="font-[var(--font-display)] font-semibold text-white text-sm group-hover:text-[var(--color-accent)] transition-colors">{t('footer.sales')}</p>
                <p className="text-sm text-white/60">{siteData.contact.whatsappSalesDisplay}</p>
              </div>
            </a>
            <a href={`https://wa.me/${siteData.contact.whatsappSupport}`} target="_blank" rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 group hover:bg-white/10 transition-colors min-h-[44px]">
              <div className="w-11 h-11 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center shrink-0">
                <Headphones size={18} className="text-[var(--color-secondary)]" />
              </div>
              <div className="text-left">
                <p className="font-[var(--font-display)] font-semibold text-white text-sm group-hover:text-[var(--color-secondary)] transition-colors">{t('footer.support_contact')}</p>
                <p className="text-sm text-white/60">{siteData.contact.whatsappSupportDisplay}</p>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
