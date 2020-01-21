const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' 
    },
    devServer: {
        contentBase: './dist', // serve files from here,
        hot: true // Hot module replacement
        // hotOnly: true // Never reload (?)
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}