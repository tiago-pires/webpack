const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist' // specially for webpack-dev-server
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
}