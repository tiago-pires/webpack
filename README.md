# Tailwind with Webpack and PostCSS

## The workflow

1. Webpack hit the `@import './css/style.css` in the entry point `src/index.js`, 
2. and will use `css-loader` to load this `css` into `JS` (load the CSS as a string in JS)
3. `postcss-loader` can then tap into this 'css string' and process it along the plugins.  

`tailwind.config.js` is created using `npx tailwind init`






