/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e7f2fc',
          100: '#b5d6f4',
          200: '#92c2ef',
          300: '#60a7e8',
          400: '#4195e4',
          500: '#117bdd',
          600: '#0f70c9',
          700: '#0c579d',
          800: '#09447a',
          900: '#07345d'
        }
      }
    },
  },
  plugins: [],
}

