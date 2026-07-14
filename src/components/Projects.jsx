import { featuredProjects, secondaryProjects } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import { Github } from 'lucide-react'

function FeaturedCard({ project, index }) {
  return (
    <div className="det-frame group border border-line rounded-sm bg-panel p-6 sm:p-8">
      <span className="corner-tl" />
      <span className="corner-br" />

      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-widest text-far mb-2">
            {project.subtitle}
          </p>
          <h3 className="font-display font-semibold text-2xl tracking-tight">
            {project.title}
          </h3>
        </div>
        <a
          href={project.github}
          target="_blank" rel="noreferrer"
          className="shrink-0 inline-flex items-center gap-2 border border-line rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-near hover:border-near transition"
        >
          <Github size={13} /> Code
        </a>
      </div>

      <p className="mt-5 text-muted leading-relaxed max-w-2xl">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-3 text-sm text-ink/90">
            <span className="text-near font-mono mt-0.5">→</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="tag-chip border border-line rounded-sm px-2.5 py-1 text-muted">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

function SecondaryCard({ project }) {
  return (
    <div className="det-frame border border-line rounded-sm bg-panel/60 p-5 hover:bg-panel transition-colors">
      <span className="corner-tl" />
      <span className="corner-br" />
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-display font-medium text-base leading-snug">{project.title}</h4>
        <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-near transition shrink-0">
          <Github size={15} />
        </a>
      </div>
      <p className="mt-2 text-sm text-muted leading-relaxed">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="tag-chip text-[0.65rem] text-muted/80">
            {s}{' '}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="Flagship perception work"
        sub="Four projects that best demonstrate multi-sensor fusion, tracking, and calibration — the core of a perception engineering role."
      />

      <div className="grid gap-6">
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <div className="mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-6">
          More work
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {secondaryProjects.map((p) => (
            <SecondaryCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
