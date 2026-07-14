import { experience, internships } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

function Entry({ item }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0 border-l border-line last:border-transparent">
      <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-near" />
      <p className="font-mono text-xs text-far uppercase tracking-widest mb-1">{item.period}</p>
      <h3 className="font-display font-semibold text-lg">{item.role}</h3>
      <p className="text-muted text-sm mb-3">{item.org}</p>
      <ul className="space-y-1.5">
        {item.bullets.map((b, i) => (
          <li key={i} className="text-sm text-ink/85 flex gap-2 leading-relaxed">
            <span className="text-muted mt-0.5">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 sm:py-28 border-t border-line">
      <SectionHeading eyebrow="Experience" title="Work history" />
      <div className="grid lg:grid-cols-2 gap-x-16">
        <div>
          {experience.map((item) => (
            <Entry key={item.role + item.org} item={item} />
          ))}
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6 lg:mb-10">Internships</p>
          {internships.map((item) => (
            <Entry key={item.role + item.org} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}import { experience, internships } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

function Entry({ item }) {
  return (
    <div className="relative pl-8 pb-10 last:pb-0 border-l border-line last:border-transparent">
      <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-near" />
      <p className="font-mono text-xs text-far uppercase tracking-widest mb-1">{item.period}</p>
      <h3 className="font-display font-semibold text-lg">{item.role}</h3>
      <p className="text-muted text-sm mb-3">{item.org}</p>
      <ul className="space-y-1.5">
        {item.bullets.map((b, i) => (
          <li key={i} className="text-sm text-ink/85 flex gap-2 leading-relaxed">
            <span className="text-muted mt-0.5">·</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 sm:py-28 border-t border-line">
      <SectionHeading eyebrow="Experience" title="Work history" />
      <div className="grid lg:grid-cols-2 gap-x-16">
        <div>
          {experience.map((item) => (
            <Entry key={item.role + item.org} item={item} />
          ))}
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6 lg:mb-10">Internships</p>
          {internships.map((item) => (
            <Entry key={item.role + item.org} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
