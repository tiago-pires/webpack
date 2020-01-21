const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: './src/index.js',
    mode: 'production',
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
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].min.css'
        })
    ]
}