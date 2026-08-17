/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ignou: {
          blue: '#0f4c81',
          gold: '#f5a623',
          red: '#d9381e',
          dark: '#0f172a',
          card: '#1e293b'
        },
        falcon: {
          50: '#F9F6F7',
          100: '#F4EFF1',
          200: '#EAE0E5',
          300: '#DAC7D0',
          400: '#C2A4B1',
          500: '#AD8797',
          600: '#966C7C',
          700: '#7D5764',
          800: '#694B55',
          900: '#5A4149',
          950: '#342329',
        },
        toast: {
          50: '#F7F5F3',
          100: '#E9E2DC',
          200: '#D0C2B7',
          300: '#B8A191',
          400: '#A78978',
          500: '#9E796C',
          600: '#876058',
          700: '#724E4B',
          800: '#5F4141',
          900: '#4F3838',
          950: '#2B1D1D',
        },
        asparagus: {
          50: '#F4F6EF',
          100: '#E7EADD',
          200: '#D0D7BF',
          300: '#B3BE98',
          400: '#8B9B66',
          500: '#7A8959',
          600: '#5F6C44',
          700: '#4A5437',
          800: '#3D452F',
          900: '#353C2B',
          950: '#1A1F14',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
