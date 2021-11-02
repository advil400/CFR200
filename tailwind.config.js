module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    fontSize: {
      '2xs': '.5rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
     },
     borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '10px',
      'full': '9999px',
    },

    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },

    container: {
      center: true,
      padding: {       
          DEFAULT: '1rem',
          xs: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
          
      },
    },
    extend: {
      
      blur: {
        xs: '0.5px'
      },
      fontFamily: {
        'piezo': ['Piezo', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
      filter: ['dark'],
      blur: ['hover', 'focus', 'dark']
    },
  },
  plugins: [],
}
