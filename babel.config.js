const presets = [
  ["@babel/env",
  {
    "modules": false
  }]
]

const plugins = [
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-transform-runtime"
]

module.exports = {
  presets,
  plugins
}
