module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'igp-red':'#c3404e',
      },
      height: {
        '50' : '50px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
