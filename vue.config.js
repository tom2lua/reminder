module.exports = {
	css: {
		loaderOptions: {
			scss: {
				data: '@import "~@/sass/abstracts/_variables.scss";'
			}
		}
	},
	devServer: {
		host: 'localhost'
	}
}
