const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require("webpack");

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
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
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
      }),
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
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        inject: true,
      })
      // new BundleAnalyzerPlugin()
    ]
  }