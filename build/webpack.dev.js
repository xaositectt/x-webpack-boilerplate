const merge = require('webpack-merge')
const common = require('./webpack.base')
const webpack = require('webpack')
const config = require('../config/index')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin


module.exports = merge(common, {
  mode: 'development',
  devtool: config.dev.devtool,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // })
  ],
  devServer: config.dev.devServerOpts
})
