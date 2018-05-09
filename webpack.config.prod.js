const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const webpack = require("webpack");

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
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
          test: /\.(png|jp(e*)g|svg)$/,  
          use: [{
            loader: 'url-loader',
            options: { 
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
            } 
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        favicon: "./src/images/favicon.ico"
      }),
      new UglifyJsPlugin(),
      new MinifyPlugin(),
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        maxFileSize: 244*1024, // 244 kB  // not work.. redo
      })]
  }