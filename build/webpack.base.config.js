const path = require("path");

const config = {
	entry: {
		app: path.resolve(__dirname, "../src/client-entry.js")
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
			// {
			// 	enforce: "pre",
			// 	test: /(\.js$)/,
			// 	loader: "eslint-loader",
			// 	exclude: /node_modules/
			// }
		]
	},
	output: {
		path: path.resolve(__dirname, "../dist"),
		publicPath: "/",
		filename: "assets/js/[name].js"
	}
};

module.exports = config;

// node ./node_modules/webpack/bin/webpack --config ./build/webpack.base.config.js