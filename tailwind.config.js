/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}', './public/index.html'],
  plugins: [],
  theme: {
    extend: {
      dropShadow: {
        'very-xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      gap: {
        half: '0.5px',
      },
    },
  },
};
