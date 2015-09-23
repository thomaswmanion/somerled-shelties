var webpack = require("webpack");
var path = require('path');
var prod = process.env.prod;

//Variables
var plugins = [];
var dest;
if (prod) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true
    }));
    dest = path.join(__dirname, 'dist')
}
else {
    dest = __dirname;
}
module.exports = {
    context: __dirname,
    devServer: {
        historyApiFallback: true,
        port: 9000
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        path: dest,
        filename: 'scripts.js'
    },
    resolve: {
        root: './bower_components'
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



if (prod) {
    var fs = require('fs');
    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }
    fs.createReadStream('index.html').pipe(fs.createWriteStream('dist/index.html'));
}