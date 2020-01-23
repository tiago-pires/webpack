module.exports = {
	plugins: [
        require('tailwindcss'),
		require("autoprefixer"),
		require("@fullhuman/postcss-purgecss")({
			content: ["./src/templates/**/*.html"]
        })
        ,require("cssnano")({
			preset: [
				"default",
				{
					discardComments: {
						removeAll: true
					}
				}
			]
		})
	]
};
