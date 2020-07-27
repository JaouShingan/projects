const path = require('path');
module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@router': path.resolve(__dirname, 'src/router'),
				'@api': path.resolve(__dirname, 'src/api'),
				'@utils': path.resolve(__dirname, 'src/utils'),
				'@components': path.resolve(__dirname, 'src/components'),
				'@views': path.resolve(__dirname, 'src/views')
			}
		}
	}
};
