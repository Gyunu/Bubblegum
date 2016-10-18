var webpack = require('webpack');
module.exports = {
	context: __dirname + "/src/js",
		entry: "./index",
		output: {
			path: __dirname + "/dist/js",
			filename: "min.bubblegum.js"
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({minimize: true})
		]
};
