import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.documentElement.classList.add('no-transition')

// Apply saved theme
if (
  localStorage.theme === 'dark' ||
  (!localStorage.theme &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Re-enable transitions
setTimeout(() => {
  document.documentElement.classList.remove('no-transition')
}, 50)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
