const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
});
// const ResolverPlugin = new webpack.ResolverPlugin([
//   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
// ]);

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}
