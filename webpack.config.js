var setup = {
	src: '/src',
	dest: '/public',
	scss: '/scss',
	js: '/js'
};

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSass = new ExtractTextPlugin({
    filename: 'style.css',
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
	watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /(node_modules|wp-admin|wp-includes)/
    },
    stats: {
        assets: true,
        assetsSort: "field",
        children: true,
        modules: false,
        hash: true,
        depth: true,
        version: false,
        timings: true
    },
	entry: [
		__dirname + setup.src + '/app.jsx',
		__dirname + setup.src + setup.scss + '/style.scss'
	],
	output: {
		path: __dirname + setup.dest,
		filename: 'app.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			}

		]
	},
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx']
    },
	plugins: [
		extractSass
	],
    devtool: 'cheap-module-inline-source-map'
};