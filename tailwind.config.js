/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,tsx,css}',
    './packages/**/*.{html,js,ts,tsx,css}',
    './**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    // screens: {
    //   sm: {min: '640px', max: '767px'},

    //   md: {min: '768px', max: '1023px'},

    //   lg: {min: '1024px', max: '1279px'},

    //   xl: {min: '1280px', max: '1535px'},

    //   '2xl': {min: '1536px'},
    // },
    extend: {
      backgroundImage: (theme) => ({
        IconTrinityTruckSecondFull:
          "url('/src/assets/icon-trinity-truck-2-full-size.jpeg')",
        IconTrinityTruckSecondCropped:
          "url('/src/assets/icon-trinity-truck-2.jpeg')",
        TruckTrinityPng:
          "url('/src/assets/trinity-steelindo-truck-crop-1.jpg')",
        IconSteelFactory: "url('/src/assets/ic_steel_factory.png')",
        IconTrinityBajaRingan: "url('/src/assets/ic-baja-ringan-vertical.jpg')",
      }),
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
        colorTitle: '#318DE9',
        colorDescription: '#BCBDBD',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  // purge: {
  //   content: [
  //     './index.html',
  //     './src/**/*.{html,js,ts,tsx,css}',
  //     './packages/**/*.{html,js,ts,tsx,css}',
  //     './**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}',
  //   ],
  // },
};
