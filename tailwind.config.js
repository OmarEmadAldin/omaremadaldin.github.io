/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 

  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './**/*.{html,js}', // 
  ],

  theme: {
    extend: {
      colors: {
        // dark mode
        base: '#0B0E11',
        panel: '#12161C',
        panel2: '#181D25',
        ink: '#E8EAED',
        muted: '#8B95A1',

        // light mode
        baseLight: '#FFFFFF',
        panelLight: '#F5F7FA',
        inkLight: '#111827',

        // accents
        near: '#5EEAD4',
        far: '#FB923C',
        gold: '#E8B84D',
        line: 'rgba(232,234,237,0.08)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },

  plugins: [],
}
