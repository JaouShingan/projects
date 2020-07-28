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
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [path.resolve(__dirname, 'src/common.less')] // 引入全局样式变量
		}
	}
};
