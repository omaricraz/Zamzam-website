/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0100ca',
          red: '#ca0100',
          green: '#61c250',
          gold: '#FFC145',
          dark: '#1E1E24',
          light: '#F8F9FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(202, 1, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
