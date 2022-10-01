module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  mode: 'jit',
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        20: '20deg',
      },
      colors: {
        'pink-primary': '#EF5DA8',
        'pink-secondary': '#FCDDEC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
