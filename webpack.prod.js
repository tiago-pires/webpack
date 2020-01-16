const path = require('path')
const webpackConfig = require('./webpack.config')
const merge = require('webpack-merge')

module.exports = merge( webpackConfig, {
    mode: 'production',
    output: {
        filename: 'build.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
})