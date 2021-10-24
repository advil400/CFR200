module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    button: [],
    container: {
      center: true,
      padding: {       
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
      },
    },
    extend: {
      blur: {
        xs: '2px'
      }
    },
  },
  variants: {
    extend: {
      blur: ['hover', 'focus']
    },
  },
  plugins: [],
}
