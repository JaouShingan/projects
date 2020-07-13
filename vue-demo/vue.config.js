const path = require('path')

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@api': path.resolve(__dirname, 'src/api'),
				'@utils': path.resolve(__dirname, 'src/utils'),
				'@components': path.resolve(__dirname, 'src/components'),
			}
		}
	}
}