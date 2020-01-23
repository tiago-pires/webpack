module.exports = {
	    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
			content: ["./src/templates/**/*.html"]
        }),
        process.env.NODE_ENV === 'production' && require('cssnano')({
            preset: ['default', {
                discardComments: {
                    removeAll: true,
                },
            }]
        })
    ]
}