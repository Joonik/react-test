const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: [
		'bootstrap-loader',
		path.join(__dirname, 'src', 'index.jsx')
	],

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'index.js'
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			__DEV__: process.env.NODE_ENV != 'production'
		}),

		new ExtractTextPlugin('index.css', {allChunks: true}),

		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.ejs'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		})
	],

	module: {
		loaders: [
			{
				test : /\.jsx?/,
				include : path.join(__dirname, 'src'),
				loader : 'babel'
			},

			{
				test: /\.ico$/,
				loader: 'file?name=[name].[ext]'
			},

			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css!postcss')
			},

			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
			},

			{
				test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				// Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
				// loader: "url?limit=10000"
				loader: "url"
			},

			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				loader: 'file?name=[name].[ext]'
			},

			{
				test: /bootstrap-sass[\\\/]assets[\\\/]javascripts/,
				loader: 'imports?jQuery=jquery'
			}
		]
	},

	postcss: [autoprefixer]
};
