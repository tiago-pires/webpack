const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const env = process.env.NODE_ENV || 'development'

module.exports = {
    entry: './src/index.js',
    mode: env,
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'postcss-sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        })
    ]
}