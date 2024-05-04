/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{html,js,ts,tsx,css}',
    './packages/**/*.{html,js,ts,tsx,css}',
    './**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain',
    '5%': '5%',
    '20%': '20%',
    '50%': '50%',
    '80%': '80%',
  },
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
        IconRengBajaRingan:
          "url('/src/assets/icon-reng-baja-ringan-clean.jpeg')",
        TruckTrinityPng:
          "url('/src/assets/trinity-steelindo-truck-crop-1.jpg')",
        IconSteelFactory: "url('/src/assets/ic_steel_factory.png')",
        IconTrinityBajaRingan: "url('/src/assets/ic-baja-ringan-vertical.jpg')",
        IconTrinityWiremesh: "url('/src/assets/ic-wiremesh.png')",
      }),
      backgroundColor: {
        colorPrimary: '#081923',
        colorBackground: '#0c2b3f',
      },
      fontFamily: {
        'helios-condensed': ['Helios Condensed', 'sans-serif'],
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
        colorWhite: '#FFFFFF',
        colorCard: '#11374d',
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
