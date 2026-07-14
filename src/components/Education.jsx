import { education, certifications, awards } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import { Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24 sm:py-28 border-t border-line">
      <SectionHeading eyebrow="Education" title="Background & recognition" />

      <div className="grid lg:grid-cols-3 gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Degree</p>
          <h3 className="font-display font-semibold text-xl">{education.degree}</h3>
          <p className="text-muted mt-1">{education.school}</p>
          <p className="font-mono text-xs text-far mt-2">{education.period} · {education.location}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Certifications</p>
          <ul className="space-y-2">
            {certifications.map((c) => (
              <li key={c} className="text-sm text-ink/85 flex gap-2">
                <span className="text-near mt-0.5">›</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Awards</p>
          <ul className="space-y-3">
            {awards.map((a) => (
              <li key={a} className="text-sm text-ink/85 flex gap-2.5">
                <Award size={15} className="text-far mt-0.5 shrink-0" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
