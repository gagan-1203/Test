module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      width: {
        '150px': '150px',
        '196px': '196px'
      },
      minWidth: {
        '470px': '470px',
        '585px': '585px',
      },
      margin: {
        '60px': '60px',
      }
    } 
  },
  plugins: [],
}