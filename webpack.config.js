const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: [
    './src/index.js',
  ],
  output: {
    publicPath: '/',
    path: __dirname + 'build',
    filename: 'app.bundle.js',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' },
      ],
    }), new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};