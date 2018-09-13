const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js',
  },
  plugins: [
    new VueLoaderPlugin(),
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'my custom title',
      filename: 'index.html',
      inject: 'body',
      template: './index.html',
    })
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css'],
    alias: {
      src: resolve('src'),
      styles: resolve('src/style'),
      base: resolve('src/components/base')
    }
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          filename: 'commons.js',
          chunks: 'initial',
          minChunks: 2
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          filename: 'node-static.js',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: ['url-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      }
    ]
  }
}
