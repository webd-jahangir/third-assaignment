/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        customGreen: '#ABEF5F',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      // Custom class utilities
      extend: {
        typography: {
          DEFAULT: {
            css: {
              '.manrope': {
                fontFamily: '"Manrope", sans-serif',
                fontOpticalSizing: 'auto',
                fontStyle: 'normal',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}