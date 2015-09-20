var webpack = require("webpack");
var path = require('path');
var prod = process.env.prod;

//Variables
var plugins = [];
var dest;
if (prod) {
    console.log('prod!!');
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
    dest = path.join(__dirname, 'dist')
}
else {
    dest = __dirname;
}
module.exports = {
    context: __dirname,
    port: 9000,
    entry: {
        app: './src/index.js'
    },
    output: {
        path: dest,
        filename: 'scripts.js'
    },
    resolve: {
        alias: {
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    },
  plugins: plugins
};