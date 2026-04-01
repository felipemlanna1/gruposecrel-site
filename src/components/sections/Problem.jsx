import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import Section from '../layout/Section'
import ScrollReveal from '../ui/ScrollReveal'

export default function Problem() {
  const { t } = useTranslation()
  const pains = ['problem.pain1', 'problem.pain2', 'problem.pain3']

  return (
    <Section id="problem" className="bg-[var(--color-background-alt)]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <ScrollReveal>
          <div>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[var(--color-text-primary)] leading-tight mb-8">
              {t('problem.title')}
            </h2>
            <div className="space-y-4">
              {pains.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-red-200 bg-red-50"
                >
                  <AlertTriangle size={20} className="text-red-500 shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">{t(key)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="card-light p-6 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle size={20} className="text-[var(--color-accent)]" />
                </div>
                <ArrowRight size={16} className="text-[var(--color-text-muted)]" />
                <span className="font-[var(--font-display)] font-bold text-[var(--color-accent)]">NEXGEN</span>
              </div>
              <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                {t('problem.solution_title')}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                {t('problem.solution_desc')}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
