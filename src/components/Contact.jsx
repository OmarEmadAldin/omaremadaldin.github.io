import { profile } from '../data/content.js'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-line bev-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/60 to-base/0 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-near mb-4">Contact</p>
        <h2 className="font-display font-semibold text-3xl sm:text-5xl tracking-tight max-w-2xl mx-auto">
          Open to perception engineering roles
        </h2>
        <p className="mt-4 text-muted max-w-lg mx-auto">
          Reach out directly, or find the code behind everything above on GitHub.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-near text-base font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-sm font-medium hover:opacity-90 transition"
          >
            <Mail size={14} /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line px-5 py-3 rounded-sm font-mono text-xs uppercase tracking-widest hover:border-near hover:text-near transition"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 border border-line px-5 py-3 rounded-sm font-mono text-xs uppercase tracking-widest hover:border-near hover:text-near transition"
          >
            <Phone size={14} /> {profile.phone}
          </a>
        </div>

        <p className="mt-16 font-mono text-[0.7rem] text-muted uppercase tracking-widest">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  )
}
