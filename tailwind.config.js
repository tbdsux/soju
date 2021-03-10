const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./*.html', './_includes/*.html', './_layouts/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    fontFamily: {
      sans: ['"Recursive"', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
