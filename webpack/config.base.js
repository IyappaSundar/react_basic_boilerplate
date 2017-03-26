var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var buildPath = path.resolve('./dist');

var webpack_config = {
    entry: {
        'app' : ['./src/js/app.js'],
        'vendor' : ['react','react-dom','classnames']
    },
    output: {
        path: buildPath,
        filename: 'js/[name]-bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader", {publicPath: '../'})
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader", {publicPath: '../'})
            },
            {
                test: /\.(png|gif|jpg)/,
                loader: 'url-loader?limit=10000&mimetype=image/png&name=images/[name].[ext]'
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
                loader: "url-loader?limit=8192&name=fonts/[name].[ext]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            hash: true
        }),
        new ExtractTextPlugin("css/[name]-bundle.css", {publicPath: '../'}),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor-bundle.js')
    ]
};


module.exports = webpack_config;