import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { Check, Phone, Building2, Store } from 'lucide-react'
import Section from '../layout/Section'
import AnimatedText from '../ui/AnimatedText'
import ScrollReveal from '../ui/ScrollReveal'
import CountUp from '../ui/CountUp'
import Button from '../ui/Button'
import { pricing, siteData } from '../../data/content'

export default function PricingPreview() {
  const { t } = useTranslation()
  const [plan, setPlan] = useState('small')

  const plans = {
    small: {
      icon: Store,
      label: t('pricing_preview.small_plan'),
      sublabel: t('pricing_preview.small_plan_desc'),
      price: pricing.small.example1User,
      unit: t('pricing_preview.unit_small'),
      features: [
        `Loja: R$ ${pricing.small.perStore}${t('pricing_preview.per_month')}`,
        `Usuário: R$ ${pricing.small.perUser[0].price}${t('pricing_preview.per_month')} (${pricing.small.perUser[0].range} users)`,
        `Implantação: R$ ${pricing.small.implantation} (${pricing.small.implantationInstallments}x)`,
        `${pricing.small.trainingHours}h treinamento remoto`,
        t('pricing_preview.training_videos'),
        pricing.small.multiStoreDiscount,
      ],
      accent: '#10B981',
      bg: '#F0FDF4',
    },
    medium: {
      icon: Building2,
      label: t('pricing_preview.medium_plan'),
      sublabel: t('pricing_preview.medium_plan_desc'),
      price: pricing.medium.perStore,
      unit: `${t('pricing_preview.per_month').replace('/', '')} / loja`,
      features: [
        ...pricing.medium.perUser.map(p => `${p.range}: R$ ${p.price}${t('pricing_preview.per_month')}`),
        `Cloud: +${pricing.medium.cloudSurcharge}`,
        `BI: +${pricing.medium.biSurcharge}`,
        `R$ ${pricing.medium.implantationRate}/${pricing.medium.implantationUnit}`,
        pricing.medium.multiStoreDiscount,
        t('pricing_preview.training_ai'),
      ],
      accent: '#3B82F6',
      bg: '#EFF6FF',
    },
  }

  const current = plans[plan]
  const Icon = current.icon

  return (
    <Section id="pricing" className="bg-[var(--color-background-alt)]">
      <div className="text-center mb-14">
        <AnimatedText
          text={t('pricing_preview.title')}
          tag="h2"
          className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {t('pricing_preview.subtitle')}
          </p>
        </ScrollReveal>
      </div>

      {/* Plan toggle */}
      <ScrollReveal>
        <div className="flex justify-center gap-3 mb-12">
          {Object.entries(plans).map(([key, p]) => {
            const PIcon = p.icon
            return (
              <button
                key={key}
                onClick={() => setPlan(key)}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer min-h-[44px] ${
                  plan === key
                    ? 'bg-white shadow-lg border-2'
                    : 'bg-white/50 border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:shadow-sm'
                }`}
                style={plan === key ? { borderColor: p.accent, color: p.accent } : undefined}
              >
                <PIcon size={18} />
                {p.label}
              </button>
            )
          })}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <motion.div
          key={plan}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-light p-8 md:p-10 relative overflow-hidden" style={{ borderColor: current.accent, borderWidth: '2px' }}>
            <div className="absolute top-0 right-0 w-60 h-60 rounded-full blur-[100px] opacity-10" style={{ backgroundColor: current.accent }} />

            <div className="relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: current.bg }}>
                  <Icon size={24} style={{ color: current.accent }} />
                </div>
                <div>
                  <h3 className="font-[var(--font-display)] font-bold text-lg text-[var(--color-text-primary)]">{current.label}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{current.sublabel}</p>
                </div>
              </div>

              <div className="flex items-baseline gap-1 mt-6 mb-1">
                <span className="text-sm text-[var(--color-text-muted)]">{t('pricing_preview.from')}</span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-lg text-[var(--color-text-secondary)]">R$</span>
                <span className="font-[var(--font-display)] text-5xl md:text-6xl font-extrabold text-[var(--color-text-primary)]">
                  <CountUp end={current.price} duration={1} />
                </span>
                <span className="text-lg text-[var(--color-text-secondary)]">{t('pricing_preview.per_month')}</span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)] mb-8">{current.unit}</p>

              <ul className="space-y-3 mb-8">
                {current.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <Check size={16} className="shrink-0 mt-0.5" style={{ color: current.accent }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href={`https://wa.me/${siteData.contact.whatsappSales}?text=${encodeURIComponent(`Olá! Tenho interesse no plano ${current.label} do NEXGEN.`)}`}
                variant="accent"
                className="w-full text-base"
              >
                <Phone size={18} />
                {t('hero.cta_demo')}
              </Button>
            </div>
          </div>
        </motion.div>
      </ScrollReveal>
    </Section>
  )
}
