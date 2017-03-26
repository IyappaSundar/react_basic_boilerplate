var webpack = require('webpack');

var webpackConfig = require('./config.base');

/*webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:3000");*/

/*webpackConfig.entry.app.unshift("webpack/hot/dev-server");*/

webpackConfig.devtool = "cheap-module-eval-source-map";

webpackConfig.plugins.push(
    new webpack.DefinePlugin({
        DEBUG: true,
        PRODUCTION: false,
        "process.env": {
            NODE_ENV: JSON.stringify("development")
        }
    })
);

/*webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);*/

module.exports = webpackConfig;


