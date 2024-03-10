/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'graycol': '#707070',
        'mblue': '#3C82F4'
      },
      backgroundImage: {
        'banner': "url('../assets/Image (4).png')"
      }
    },
  },
  plugins: [],
}

