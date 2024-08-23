/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
      extend: {
        backgroundImage: {
            'custom-image': "url('/src/images/vector.png')",
          },
      },
    },
    plugins: [],
  }