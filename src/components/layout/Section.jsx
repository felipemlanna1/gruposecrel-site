export default function Section({ id, children, className = '', background = '' }) {
  return (
    <section
      id={id}
      className={`px-6 py-20 md:px-10 md:py-24 lg:px-20 lg:py-32 ${background} ${className}`}
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        {children}
      </div>
    </section>
  )
}
