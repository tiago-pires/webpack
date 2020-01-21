const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                        esModule: false // https://tinyurl.com/s57lzn8
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/html/index.html',
            meta: {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
            }
        })
    ]
}