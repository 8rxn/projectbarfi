/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      'wiggle': 'wiggle 3s ease-in-out infinite',
    },
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        'color-primary': '#ffd561',
        'color-secondary': '#d15f5e',
        'bg-primary': '#000732',
        'bg-secondary': '#010f4f',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(30px)' },
        }
      },
    },
  },
  plugins: [],
}