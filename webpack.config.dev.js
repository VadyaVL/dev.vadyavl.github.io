'use strict';

const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require("webpack");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  favicon: "./src/images/favicon.ico"
});

const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();

module.exports = {
    mode: 'development',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000',  // WebpackDevServer host and port
      'webpack/hot/only-dev-server',                      // "only" prevents reload on syntax errors
      './src/index.jsx'
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              'babel-loader?cacheDirectory=true',
            ]
        },
        {
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.jpg$/,
          loader: "url-loader?mimetype=image/jpg" 
       }
      ]
    },
    plugins: [htmlPlugin, hotModuleReplacementPlugin/*, bundleAnalyzerPlugin*/]
  }