/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Kanit':['Kanit', 'sans-serif']
      },
      keyframes: {
        wave: {
          "0%": {
            "box-shadow":
              "0 0 0 0 rgba(219, 39, 119, 0.3), 0 0 0 1em rgba(219, 39, 119, 0.3), 0 0 0 2em rgba(219, 39, 119, 0.3),0 0 0 3em rgba(219, 39, 119, 0.3)",
          },
          "100%": {
            "box-shadow":
              "0 0 0 1em rgba(219, 39, 119, 0.3), 0 0 0 2em rgba(219, 39, 119, 0.3), 0 0 0 3em rgba(219, 39, 119, 0.3), 0 0 0 4em rgba(219, 39, 119, 0)",
          },
        },
      },
      animation: {
        wave: "wave 1s linear infinite",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        // c1: colors.aquamarine,
        // c2: colors.turquoise,
        // c3: colors.tiffany_blue,
        // c4: colors.sky_blue,
        // c5: colors.aero,
        // c6: colors.picton_blue,
        // c7: colors.united_nations_blue,
        // c8: colors.slate_blue,
        // c9: colors.grape,
        // c10: colors.french_violet,

        'c10': { 
          DEFAULT: '#7400b8', 
          100: '#170025', 
          200: '#2f0049', 
          300: '#46006e', 
          400: '#5d0093', 
          500: '#7400b8', 
          600: '#9e00f9', 
          700: '#b73bff', 
          800: '#cf7cff', 
          900: '#e7beff' }, 
        'c9': { 
          DEFAULT: '#6930c3', 
          100: '#150a27', 
          200: '#2a144e', 
          300: '#3f1d76', 
          400: '#54279d', 
          500: '#6930c3', 
          600: '#8655d5', 
          700: '#a480df', 
          800: '#c3aaea', 
          900: '#e1d5f4' }, 
        'c8': { 
          DEFAULT: '#5e60ce', 
          100: '#0e0f2e', 
          200: '#1c1d5c', 
          300: '#2a2c8a', 
          400: '#393bb8', 
          500: '#5e60ce', 
          600: '#7f81d8', 
          700: '#9fa0e2', 
          800: '#bfc0eb', 
          900: '#dfdff5' }, 
        'c7': { 
          DEFAULT: '#5390d9', 
          100: '#0b1c31', 
          200: '#163863', 
          300: '#205494', 
          400: '#2b71c5', 
          500: '#5390d9', 
          600: '#76a6e1', 
          700: '#98bce8', 
          800: '#bad3f0', 
          900: '#dde9f7' }, 
        'c6': { 
          DEFAULT: '#4ea8de', 
          100: '#092333', 
          200: '#134666', 
          300: '#1c6999', 
          400: '#258ccb', 
          500: '#4ea8de', 
          600: '#72b9e5', 
          700: '#95caec', 
          800: '#b8dcf2', 
          900: '#dcedf9' }, 
        'c5': { 
          DEFAULT: '#48bfe3', 
          100: '#082a34', 
          200: '#105468', 
          300: '#187d9c', 
          400: '#20a7d0', 
          500: '#48bfe3', 
          600: '#6ecce8', 
          700: '#92d9ee', 
          800: '#b7e5f4', 
          900: '#dbf2f9' }, 
        'c4': { 
          DEFAULT: '#56cfe1', 
          100: '#092f35', 
          200: '#135e6a', 
          300: '#1c8d9f', 
          400: '#25bcd4', 
          500: '#56cfe1', 
          600: '#78d8e7', 
          700: '#9ae2ed', 
          800: '#bbecf3', 
          900: '#ddf5f9' }, 
        'c3': { 
          DEFAULT: '#64dfdf', 
          100: '#0b3535', 
          200: '#166b6b', 
          300: '#21a0a0', 
          400: '#2dd4d4', 
          500: '#64dfdf', 
          600: '#82e5e5', 
          700: '#a1ecec', 
          800: '#c0f2f2', 
          900: '#e0f9f9' }, 
        'c2': { 
          DEFAULT: '#72efdd', 
          100: '#073f37', 
          200: '#0e7f6e', 
          300: '#15bea5', 
          400: '#31e8cd', 
          500: '#72efdd', 
          600: '#8df2e3', 
          700: '#aaf6ea', 
          800: '#c6f9f1', 
          900: '#e3fcf8' }, 
        'c1': { 
          DEFAULT: '#80ffdb', 
          100: '#004d37', 
          200: '#00996e', 
          300: '#00e6a4', 
          400: '#33ffc5', 
          500: '#80ffdb', 
          600: '#99ffe2', 
          700: '#b3ffe9', 
          800: '#ccfff1', 
          900: '#e5fff8' }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}