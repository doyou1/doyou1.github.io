/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/*/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'dark': '0 16px 32px -16px rgba(0,0,0,0.1), 0 16px 32px -16px rgba(0,0,255, 0.05)',
    },
    extend: {
      colors: {
        'hover-light-dark': 'rgba(35,39,47,.05)',
        'hover-deep-dark': 'rgba(246,247,249,.05)',
        
      },
    },
  },
  plugins: [],
}