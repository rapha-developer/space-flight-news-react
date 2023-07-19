/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          '100': 'hsl(var(--color-dark-100))',
          '200': 'hsl(var(--color-dark-200))',
          '300': 'hsl(var(--color-dark-300))'
        },
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}

