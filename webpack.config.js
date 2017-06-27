const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const config = require('./config');

module.exports = {
  entry: {
	  app: './src/index.jsx',
    vendor: ['react', 'react-dom'],
  },
  output: {
	  filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
	  rules: [
		  {
			  test: /\.(jsx|js)$/,
      loader: 'babel-loader',
    },
    {
  			test: /\.(less|css)$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    },
    {
  			test: /\.(png|jpg|svg)$/,
      loader: 'file-loader',
    },
  ],
  },
  plugins: [
	  new HtmlWebpackPlugin({
    title: 'quick-start',
    template: 'index.html',
  }),
    new webpack.optimize.CommonsChunkPlugin({
		  name: 'vendor',
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3333/',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: config.port,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx',],
  }
};
