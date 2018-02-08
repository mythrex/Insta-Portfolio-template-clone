//required modules

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

//for live reload
var isProd = process.env.NODE_ENV == 'production';
var cssDev = ['style-loader','css-loader','sass-loader'];
var cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: ['css-loader','sass-loader']
});

//check which environment
//in production livereload is disabled and styles are compiled into one app.bundle.css file
//in dev mode live reload is enabled and styles are added to head tag

var cssConfig = isProd ? cssProd : cssDev;
module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].[hash].bundle.js'
	},
	module: {
		rules: [
			{test: /\.sass$|\.scss$|\.css$/, use: cssConfig},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=1000000&mimetype=application/font-woff&name=[name].[ext]&outputPath=fonts/' },
	        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'file-loader?name=[name].[ext]&outputPath=fonts/' },
	        //image loaders
	        { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
            'file-loader?name=[name].[ext]&outputPath=images/',
            'image-webpack-loader'
        ]},
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
  		compress: true,
  		stats: 'errors-only',
  		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
      		template: 'ejs-simple-loader?title=MaharajaAcademy-Home&activePage=home!./src/index.ejs',
      		filename: 'index.html',
      		minify: {
      			collapseWhitespace: true
      		}
		}),
		new ExtractTextPlugin({
			filename: '[hash].css',
			disable: !isProd,
			allChunks: true,
		}),
		//hot Module Replacement
		new webpack.NamedModulesPlugin(),
	    new webpack.HotModuleReplacementPlugin()
	]
};