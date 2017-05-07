'use strict';
// const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: { path: __dirname, filename: 'static/js/bundle.js' },
  devtool: 'module-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: []
};
