// TODO
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');

const SRC_DIR = path.resolve(__dirname, 'client');
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, 'client', 'index.jsx')
  },
  output: {
    filename: "[name].bundle.js",
    path: DIST_DIR
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
        new WebpackBar(),
        new CleanWebpackPlugin(),
        // generates an html file from template
        new HtmlWebpackPlugin({
          template: path.resolve(SRC_DIR, 'index.ejs')
    })
  ]
}
