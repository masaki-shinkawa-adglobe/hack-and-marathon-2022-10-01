module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  // add your custom rules here
  rules: {},
}
