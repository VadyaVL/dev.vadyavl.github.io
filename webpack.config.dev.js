'use strict';

const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackPwaManifest = require('webpack-pwa-manifest');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://0.0.0.0:3000',  // WebpackDevServer host and port
      'webpack/hot/only-dev-server',                    // "only" prevents reload on syntax errors
      './src/index.tsx'
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
      // Ecomy, but not work in production. Maybe minimizators create conflict with h().
      // alias: {
      //  "react": "preact-compat",
      //  "react-dom": "preact-compat"
      // }
    },
    module: {
      rules: [
        { 
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader"
        },
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
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        favicon: "./src/images/favicon.ico"
      }),
      new webpack.HotModuleReplacementPlugin(),
      new WebpackPwaManifest({
        name: 'Vadym Lytvyn Site',
        short_name: 'VadyaVL',
        description: 'My awesome Progressive Web App!',
        background_color: '#ffffff',
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ff0000",
        inject: true
      }),

      // new BundleAnalyzerPlugin()
    ]
  }