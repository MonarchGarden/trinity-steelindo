/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,tsx,css}',
    './packages/**/*.{html,js,ts,tsx,css}',
  ],
  theme: {
    // screens: {
    //   sm: {min: '640px', max: '767px'},

    //   md: {min: '768px', max: '1023px'},

    //   lg: {min: '1024px', max: '1279px'},

    //   xl: {min: '1280px', max: '1535px'},

    //   '2xl': {min: '1536px'},
    // },
    extend: {
      backgroundImage: {
        IconTrinityTruckSecondFull:
          "url('../src/assets/icon-trinity-truck-2-full-size.jpeg')",
        IconTrinityTruckSecondCropped:
          "url('../src/assets/icon-trinity-truck-2.jpeg')",
        TruckTrinityPng:
          "url('../src/assets/trinity-steelindo-truck-crop-1.jpg')",
      },
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
