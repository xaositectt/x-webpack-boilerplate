const path = require('path')
const prodEnv = require('./prod.env')
const devEnv = require('./dev.env')

module.exports = {
  prod: {
    env: prodEnv,
    port: 8080,
    devtool: 'source-map',
    assetsRoot: path.resolve(__dirname, '../dist')
  },
  dev: {
    env: devEnv,
    devServerOpts : require('./devserver_opts'),
    devtool: 'inline-source-map',
  }
}
