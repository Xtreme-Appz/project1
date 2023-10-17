module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'culti-dark': '#0a0f0b',
        'culti-green': '#0b4419',
      },
      backgroundImage: theme => ({
        'cannabis-field': "url('/images/cannabis_field.jpg')",
      }),
      borderRadius: {
        'xl': '1.5rem',
      },
      opacity: {
        '90': '0.9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}