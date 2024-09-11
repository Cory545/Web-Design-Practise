/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'sm': '360px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}