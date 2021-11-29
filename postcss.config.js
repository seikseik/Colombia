const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const viewportCorrection = require("postcss-viewport-height-correction")

module.exports = {
  plugins: [
    viewportCorrection(),
    autoprefixer(),
    cssnano({ preset: "default" }),
  ],
}
