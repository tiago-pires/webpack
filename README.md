# Config 

```js
module.exports = {
    entry: './src/index.js',                      // define custom entry point
    mode: 'development',                          
    output: { 
        filename: 'build.js',                     
        path: path.resolve(__dirname, 'dist')     // save 'build.js' to folder '/dist/'
    }
}
```
