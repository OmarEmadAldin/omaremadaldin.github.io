import { useEffect } from 'react'

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {

  // 🔥 Theme toggle logic (runs once)
  useEffect(() => {
    const toggleBtn = document.getElementById('theme-toggle')
    const fade = document.getElementById('theme-fade')

    if (!toggleBtn) return

    toggleBtn.onclick = () => {
      if (!fade) {
        // fallback if fade not found
        document.documentElement.classList.toggle('dark')
      } else {
        fade.style.opacity = '1'

        setTimeout(() => {
          document.documentElement.classList.toggle('dark')

          if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark'
          } else {
            localStorage.theme = 'light'
          }

          fade.style.opacity = '0'
        }, 150)
      }
    }
  }, [])

  return (
    <div className="bg-baseLight text-inkLight dark:bg-base dark:text-ink min-h-screen">

      {/* NAV (you should place toggle button inside it) */}
      <Nav />

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>

      <Contact />
    </div>
  )
}
