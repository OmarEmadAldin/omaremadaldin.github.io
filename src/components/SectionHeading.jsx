export default function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-near mb-3">{eyebrow}</p>
      <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">{title}</h2>
      {sub && <p className="mt-3 text-muted max-w-xl">{sub}</p>}
    </div>
  )
}
