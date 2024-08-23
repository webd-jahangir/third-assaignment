/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': 'linear-gradient(0deg, rgb(255, 255, 255), rgba(255, 255, 255, 0) 100%)',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        customGreen: '#ABEF5F',
      },
    },
  },
  plugins: [],
}

