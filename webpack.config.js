const path = require("path");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'build.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    }
}