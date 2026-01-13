/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A2463',
          red: '#FF5252',
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
        'glow': '0 0 20px rgba(255, 82, 82, 0.5)',
      }
    },
  },
  plugins: [],
}
