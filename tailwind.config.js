/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,tsx}',
    './packages/**/*.{html,js,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        colorPrimary: '#081923',
        colorBackground: '#0c2b3f',
      },
      borderColor: {
        colorPrimary: '#081923',
        colorBackground: '#0c2b3f',
      },
      colors: {
        colorPrimary: '#081923',
        colorSecondary: '#0c2b3f',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'active'],
    },
  },
};
