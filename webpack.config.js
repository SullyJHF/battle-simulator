const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const sass = require('sass');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(c|s[ac])ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
            },
          }],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({ template: 'src/index.html' }),
    new CopyWebpackPlugin({ patterns: [{ from: 'src/images', to: 'images' }] }),
  ],
  mode: devMode ? 'development' : 'production',
};
