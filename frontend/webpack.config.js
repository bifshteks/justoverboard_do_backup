module.exports = {
	mode: 'development',
	context: __dirname + '/app',
	entry: './core.js',
	output: {
		path: __dirname + '/app',
		filename: 'index.js'
	},
	module: {
		rules: [
			{test: /\.js$/, loader: 'babel-loader'}
		]
	}
};