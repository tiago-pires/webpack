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
                test: /\.scss$/,
                use: [
                    'style-loader', // 3. Inject styles into DOM
                    'css-loader',   // 2. Stringify CSS into JS
                    'sass-loader'   // 1. Stringify SASS into JS making it CSS
                ]
            }
        ]
    }
}