const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // remove old /dist files


module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'build.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new htmlWebpackPlugin(),
        new CleanWebpackPlugin(),
    ]
}