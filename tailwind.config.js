/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {

      'customSmallSize': { 'max': '490px' },
      'temporary': { 'min': '490px', 'max': '670px' },
      'justOnce': { 'min': '100px', 'max': '700px' },
      'customSmallMd': { 'min': '670px', 'max': '975px' },  // min 490 and max 670 is for by default
      'customLgSize': '975px',

    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'main-black': '#1e1e1f',
        'hover-blue': '#3238F2'
      },
    },
  },
  plugins: [],
}