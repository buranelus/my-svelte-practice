const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    'app': './src/index.js'
  },
  resolve: {
    extensions: ['.js', '.html'],
    alias: {
      '@': path.resolve('src')
    }
  },
  output: {
    path: path.resolve(__dirname,  'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        loader: 'babel-loader',
        include: path.resolve('src')
      },
      {
        test: /\.html$/,
        loader: 'svelte-loader',
        include: path.resolve('src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}
