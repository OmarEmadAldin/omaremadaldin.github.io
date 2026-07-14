import { useEffect, useState } from 'react'
import { profile, nav } from '../data/content.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = profile.name
    .split(' ')
    .map(w => w[0])
    .slice(0, 2)
    .join('')

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-baseLight/90 dark:bg-base/90 backdrop-blur border-b border-line'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-semibold text-lg tracking-tight text-inkLight dark:text-ink"
        >
          {initials}
          <span className="text-near">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-muted hover:text-near transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3">

          {/* 🌗 Theme Toggle */}
          <button
            id="theme-toggle"
            aria-label="Toggle theme"
            className="text-sm border border-line rounded px-3 py-1.5 transition-all duration-300 hover:scale-105 active:scale-95 text-inkLight dark:text-ink"
          >
            🌗
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-inkLight dark:text-ink font-mono text-xs border border-line rounded px-3 py-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-baseLight dark:bg-base border-t border-line px-6 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-muted hover:text-near transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
