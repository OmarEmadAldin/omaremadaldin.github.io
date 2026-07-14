/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0B0E11',
        panel: '#12161C',
        panel2: '#181D25',
        line: 'rgba(232,234,237,0.08)',
        ink: '#E8EAED',
        muted: '#8B95A1',
        near: '#5EEAD4',
        far: '#FB923C',
        gold: '#E8B84D',
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
