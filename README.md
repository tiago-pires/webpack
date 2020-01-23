# Tailwind with Webpack and PostCSS

## The workflow

1. Webpack hit the `@import './css/style.css` in the entry point `src/index.js`, 
2. and will use `css-loader` to load this `css` into `JS` (load the CSS as a string in JS)
3. `postcss-loader` can then tap into this 'css string' and process it along the plugins.  

`tailwind.config.js` is created using 

```Bash
npx tailwind init
````

## Enviros
I wonly want to minify and PurgeCSS on poduction so there is an environment conditional on `postcss.config.js` 

```Javascript
process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
   ...
})
```
The caveat is that PostCSS and Webpack enviro seams to be independent so setting the mode with Webpack won't affect postCSS. To solve this I'm passing the `NODE_ENV='...'` with the `package.json` script like:

```javascript 
"scripts": {
   "dev": "NODE_ENV='development' webpack --watch",
   "prod": "NODE_ENV='production' webpack"
}
```