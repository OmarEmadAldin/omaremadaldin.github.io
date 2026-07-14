import { skills } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 sm:py-28 border-t border-line">
      <SectionHeading eyebrow="Skills" title="Technologies I work with" />
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <p className="font-mono text-xs uppercase tracking-widest text-far mb-3">{group}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span
                  key={s}
                  className="tag-chip border border-line rounded-sm px-3 py-1.5 text-ink/85 hover:border-near hover:text-near transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
