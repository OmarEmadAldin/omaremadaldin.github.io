import { featuredProjects, secondaryProjects } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { Github } from 'lucide-react'

function FeaturedCard({ project }) {
  return (
    <div className="det-frame group border border-line rounded-sm bg-panel p-6 sm:p-8">
      <span className="corner-tl" />
      <span className="corner-br" />

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Small, fixed-size thumbnail rather than a full-width banner */}
        {project.image && (
          <div className="shrink-0 w-full sm:w-64 h-44 rounded-sm overflow-hidden border border-line bg-panel2">
            <img
              src={project.image}
              alt={`${project.title} demo`}
              loading="lazy"
              className="w-full h-full object-cover object-center grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-far mb-2">
                {project.subtitle}
              </p>
              <h3 className="font-display font-semibold text-2xl tracking-tight text-gold">
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
      </div>
    </div>
  )
}

function SecondaryCard({ project }) {
  return (
    <div className="det-frame h-full flex flex-col border border-line rounded-sm bg-panel/60 overflow-hidden hover:bg-panel transition-colors">
      <span className="corner-tl" />
      <span className="corner-br" />

      {/* Fixed-height landscape thumbnail — same aspect for every card so
          nothing looks stretched or squished regardless of source image size */}
      <div className="h-32 w-full overflow-hidden border-b border-line bg-panel2 shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} demo`}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-[0.65rem] text-muted/50 uppercase tracking-widest">
            No preview
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display font-semibold text-base leading-snug text-gold">
            {project.title}
          </h4>
          <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-near transition shrink-0">
            <Github size={15} />
          </a>
        </div>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">{project.description}</p>
        <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="tag-chip text-[0.65rem] text-muted/80">
              {s}{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Projects"
        title="perception work"
        sub="Four projects that best demonstrate multi-sensor fusion, tracking, and calibration — the core of a perception engineering role."
      />

      <div className="grid gap-6">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <FeaturedCard project={p} />
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-6">
          More work
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {secondaryProjects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80} className="h-full">
              <SecondaryCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
