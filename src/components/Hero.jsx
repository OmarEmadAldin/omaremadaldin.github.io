import { profile } from '../data/content.js'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bev-grid">
      {/* ambient radar sweep */}
      <div className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none">
        <div className="radar-sweep" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-base/0 via-base/40 to-base pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE → TEXT */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-near mb-6">
            Perception / Computer Vision Engineer
          </p>

          <h1 className="font-display font-semibold text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-near text-base font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-sm font-medium hover:opacity-90 transition"
            >
              View Projects <ArrowDown size={14} />
            </a>

            <a
              href={profile.github}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 rounded-sm font-mono text-xs uppercase tracking-widest text-ink hover:border-near hover:text-near transition"
            >
              <Github size={14} /> GitHub
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-muted hover:text-near transition font-mono text-xs"
            >
              <Mail size={14} /> {profile.email}
            </a>
          </div>

          <div className="mt-16 flex items-center gap-3 font-mono text-[0.7rem] text-muted uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-near animate-pulse" />
            Based in {profile.location} — open to relocate and for engineering roles
          </div>
        </div>

        {/* RIGHT SIDE → IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/projects/5956035298208714361.jpg"
            alt="Portfolio Visual"
            className="w-80 h-80 object-cover rounded-xl border border-line shadow-lg"
          />
        </div>

      </div>
    </section>
  )
}