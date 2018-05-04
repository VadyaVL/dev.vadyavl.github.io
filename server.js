'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

const port = 3000;
const host = 'localhost';

new WebpackDevServer(Webpack(config), {
    hot: true,
    compress: true,
    watchContentBase: true,
    stats: {
        colors: true
    }
}).listen(port, host, function (err) {
    if(err){
        console.log(err);
    }

    console.log(`http://${host}:${port}/`);
});
