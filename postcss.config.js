module.exports = {
  plugins: [
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
          content: [
              './src/templates/**/*.html'
          ],
          css: 'src/'
      }),
      require('cssnano')({
          preset: ['default', {
              discardComments: {
                  removeAll: true,
              },
          }]
      })
  ]
}