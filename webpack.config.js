const path = require("path");

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
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    }
}