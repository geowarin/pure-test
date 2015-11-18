var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var jeet = require('jeet');
var nib = require('nib');

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Boot React',
            template: path.join(__dirname, 'assets/index-template.html')
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("styles.css")
    ],
    resolve: {
        extensions: ['', '.js'],
        root: path.join(__dirname, 'src')
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|css)$/,
                loader: 'stripcomment'
            }
        ],
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'stylus-loader')
        }]
    },
    stylus: {
        use: [jeet(), nib()]
    }
};
