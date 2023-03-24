/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        'color-primary': '#ffd561',
        'color-secondary': '#d15f5e',
        'bg-primary': '#000732',
        'bg-secondary': '#010f4f',
      },
    },
  },
  plugins: [],
}