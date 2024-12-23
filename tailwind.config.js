/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'false',
  content: [
    './index.html',
    './src/**/*.{html,js,ts,tsx,css}',
    './packages/**/*.{html,js,ts,tsx,css}',
    './**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}',
  ],
  backgroundSize: {
    auto: 'auto',
    cover: 'cover',
    contain: 'contain',
    '5%': '5%',
    '20%': '20%',
    '50%': '50%',
    '80%': '80%',
  },
  plugins: [addVariablesForColors],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fade-in-down': 'fade-in-down 1s ease-out forwards',
        wave: 'wave 8s linear infinite',
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        wave: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-50%)'},
        },
        'fade-in-up': {
          '0%': {opacity: 0, transform: 'translateY(20px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
        'fade-in-down': {
          '0%': {opacity: 0, transform: 'translateY(-20px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},
        },
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
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
        colorScrollTrack: '#464646',
        'scrollbar-thumb': '#333',
        'scrollbar-track': '#464646',
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ['dark'],
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

function addVariablesForColors({addBase, theme}) {
  const flattenColorPalette =
    require('tailwindcss/lib/util/flattenColorPalette').default;

  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
}
