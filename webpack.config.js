const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const NODE_ENV = process.env.NODE_ENV || 'production';
const isDevelopment = NODE_ENV === 'development';

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(svg|ttf|woff|woff2|eot|css|png)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: isDevelopment ? 'eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './docs',
  },
};
