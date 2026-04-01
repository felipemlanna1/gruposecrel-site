import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import Section from '../layout/Section'
import AnimatedText from '../ui/AnimatedText'
import ScrollReveal from '../ui/ScrollReveal'
import { differentials } from '../../data/content'

const diffColors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899']

export default function Differentials() {
  const { t } = useTranslation()

  return (
    <Section id="differentials" className="bg-white">
      <div className="text-center mb-16">
        <AnimatedText
          text={t('differentials.title')}
          tag="h2"
          className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)]"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {differentials.map((diff, i) => {
          const Icon = diff.icon
          const color = diffColors[i]
          return (
            <ScrollReveal key={diff.key} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="card-light p-6 md:p-8 text-center h-full group"
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors"
                  style={{ backgroundColor: `${color}10` }}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={26} style={{ color }} />
                </motion.div>
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] mb-2 text-sm">
                  {t(`differentials.${diff.key}`)}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {t(`differentials.${diff.key}_desc`)}
                </p>
              </motion.div>
            </ScrollReveal>
          )
        })}
      </div>
    </Section>
  )
}
