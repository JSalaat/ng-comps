/**
 * Created by junaid on 8/5/16.
 */

var webpack = require('webpack');
module.exports = {
    entry: {
        app: './app/app.js',
        vendor: [
            './node_modules/angular/angular.js',
            //'./node_modules/angular-material/angular-material.js',
            //'./node_modules/angular-ui-router/release/angular-ui-router.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/js',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=es2015'
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js", Infinity)
    ]
};