import { motion } from 'motion/react'

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all cursor-pointer'
  const variants = {
    primary: 'bg-[var(--color-primary)] text-white px-8 py-3.5 hover:bg-[var(--color-primary-light)] hover:shadow-lg',
    secondary: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-3.5 hover:bg-[var(--color-primary)] hover:text-white',
    accent: 'bg-[var(--color-accent)] text-white px-8 py-3.5 hover:brightness-110 hover:shadow-lg hover:shadow-[var(--color-accent)]/25',
    ghost: 'text-[var(--color-text-secondary)] px-6 py-3 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]',
    'ghost-light': 'text-white/80 border-2 border-white/20 px-8 py-3.5 hover:bg-white/10 hover:border-white/40',
  }
  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
