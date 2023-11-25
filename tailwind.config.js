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
      },
    },
  },
};
