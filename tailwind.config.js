/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '540px',
      // tablet
      md: '768px',
      // tablet
      lg: '1024px',
      // tablet grande e notebook pequeno
      xl: '1280px',
      // notebook
      '2xl': '1536px',
      // desktop
    },
  },
  plugins: [],
};
