var webpack = require('webpack');

module.exports = {
    watch: true,
    devtool: "source-map",
    output: {
        filename : 'ui.bundle.js'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress:{
        //         warnings: true
        //     },
        //     mangle: {
        //         except: ['$super', '$', 'exports', 'require']
        //     }
        // })
    ]
}