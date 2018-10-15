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
    var err = function(err) {
        if (err) throw console.error(err);
    };
    var fs = require('fs-extra');
    var minify = require('html-minifier').minify;

    fs.emptyDir('./dist', function(err) {
        if (err) throw console.error(err);
        fs.copy('favicons/', 'dist/', {}, err);
        fs.copy('images/', 'dist/images/', {}, err);
        fs.readFile('./index.html', 'utf8', function(err, data) {
            if (err) throw console.error(err);
            var result = minify(data, {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeOptionalTags: true
            });
            fs.writeFile('./dist/index.html', result, err);
        });
    })


}
