/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'sm': '360px',
        'md': '600px',
        'lg': '950px',

        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}