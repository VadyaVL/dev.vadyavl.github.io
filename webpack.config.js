
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  favicon: "./src/images/favicon.ico"
});

module.exports = {
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
          test: /\.jpg$/,
          loader: "url-loader?mimetype=image/jpg" 
       }
      ]
    },
    plugins: [htmlPlugin]
  }