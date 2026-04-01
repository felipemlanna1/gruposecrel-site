import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import Section from '../layout/Section'
import AnimatedText from '../ui/AnimatedText'
import ScrollReveal from '../ui/ScrollReveal'
import { modules } from '../../data/content'

export default function Modules() {
  const { t } = useTranslation()
  const [activeModule, setActiveModule] = useState(null)

  return (
    <Section id="modules" className="bg-white">
      <div className="text-center mb-16">
        <AnimatedText
          text={t('modules.title')}
          tag="h2"
          className="font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4"
        />
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {t('modules.subtitle')}
          </p>
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {modules.map((mod, i) => {
          const Icon = mod.icon
          const isActive = activeModule === mod.key
          return (
            <ScrollReveal key={mod.key} delay={i * 0.06}>
              <motion.div
                onHoverStart={() => setActiveModule(mod.key)}
                onHoverEnd={() => setActiveModule(null)}
                onClick={() => setActiveModule(isActive ? null : mod.key)}
                className={`card-light p-6 cursor-pointer group relative overflow-hidden h-full transition-all ${
                  isActive ? 'ring-2 ring-[var(--color-primary)]/30 shadow-lg' : ''
                }`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/15 transition-colors">
                    <Icon size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text-primary)] mb-2">
                    {t(`modules.${mod.key}`)}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {t(`modules.${mod.key}_desc`)}
                  </p>

                  {/* Tap hint — visible on mobile */}
                  <div className={`mt-3 flex items-center gap-1 text-xs font-medium transition-colors ${
                    isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-primary)]/60'
                  }`}>
                    <span>{isActive ? t('modules_ui.collapse') : t('modules_ui.expand')}</span>
                    <motion.span
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 pt-3 border-t border-[var(--color-border)] space-y-2 overflow-hidden"
                      >
                        {mod.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </ScrollReveal>
          )
        })}
      </div>
    </Section>
  )
}
