module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        20: '20deg',
      },
      backgroundColor: {
        'pink-primary': '#EF5DA8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
