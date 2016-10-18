var webpack = require('webpack');
module.exports = {
	context: __dirname + "/src/ts",
		entry: "./index",
		devtool: "source-map",
		output: {
			path: __dirname + "/dist/js",
			filename: "min.bubblegum.js"
		},
		resolve: {
			extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
		},
		module: {
			loaders: [
				{ test: /\.tsx?$/, loader: 'ts-loader' }
			]
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({minimize: true})
		]
};
