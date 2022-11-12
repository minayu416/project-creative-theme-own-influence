module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      './node_modules/tw-elements/dist/js/**/*.js'
      // './content/**/*.md',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('tw-elements/dist/plugin')
    ],
  }