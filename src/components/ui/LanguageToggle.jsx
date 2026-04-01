import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

export default function LanguageToggle({ className = '', scrolled = false }) {
  const { i18n } = useTranslation()
  const isEN = i18n.language === 'en'
  const toggle = () => i18n.changeLanguage(isEN ? 'pt-BR' : 'en')

  return (
    <button
      onClick={toggle}
      className={`relative inline-flex items-center gap-1.5 cursor-pointer px-2.5 py-2 rounded-lg transition-colors ${
        scrolled ? 'hover:bg-[var(--color-surface)]' : 'hover:bg-white/10'
      } ${className}`}
      aria-label={isEN ? 'Mudar para Português' : 'Switch to English'}
      data-testid="language-toggle"
    >
      <span className={`text-base leading-none transition-opacity ${isEN ? 'opacity-40 grayscale' : 'opacity-100'}`}>🇧🇷</span>

      <div className={`w-10 h-[22px] rounded-full relative border ${
        scrolled ? 'bg-[var(--color-surface)] border-[var(--color-border)]' : 'bg-white/10 border-white/25'
      }`}>
        <motion.div
          className="w-[16px] h-[16px] rounded-full absolute top-[2px] shadow-sm"
          style={{ backgroundColor: scrolled ? 'var(--color-primary)' : '#6AB8EE' }}
          animate={{ left: isEN ? '21px' : '2px' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </div>

      <span className={`text-base leading-none transition-opacity ${isEN ? 'opacity-100' : 'opacity-40 grayscale'}`}>🇺🇸</span>
    </button>
  )
}
