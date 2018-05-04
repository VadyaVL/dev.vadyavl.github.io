const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const CompressionPlugin = require("compression-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  favicon: "./src/images/favicon.ico"
});

const uglifyJsPlugin = new UglifyJsPlugin();

const minifyPlugin = new MinifyPlugin();

const closureCompilerPlugin = new ClosureCompilerPlugin({
  compiler: {
    language_in: 'ECMASCRIPT6',
    language_out: 'ECMASCRIPT5',
    compilation_level: 'ADVANCED'
  },
  concurrency: 3,
});

const compressionPlugin = new CompressionPlugin({
  test: /\.js/,
  cache: true,
  algorithm: 'gzip',
  minRatio: 0.8
});

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
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
    plugins: [htmlPlugin, uglifyJsPlugin, minifyPlugin/*, compressionPlugin*/]
  }