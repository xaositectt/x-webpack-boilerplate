const path = require('path');

module.exports = {
  contentBase: path.resolve(__dirname, '../dist'),
  port: 3001,
  hot: true,
  compress: true,
  // open: true,
  // openPage: '',
  overlay: {
    warnings: true,
    errors: true
  }
}
