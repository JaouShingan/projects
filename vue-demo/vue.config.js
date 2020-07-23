const path = require('path');
module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				'@router': path.resolve(__dirname, 'src/router'),
			},
		},
	},
};
