const path = require( 'path' )
const env = process.env.NODE_ENV
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

// Let's put our configuration together
module.exports = {
	entry: {
		bundle: './assets/js/main.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve( __dirname, 'dist' ),
	},
	mode: env,
	stats: {
		children: false,
	},
	module: {
		// Pass in our loaders to handle file types appropriately
		rules: [
			// Run our JS through babel for ES6 and JS Modules support
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				},
			},
			// Handle our .css files through our loaders
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			},
		]
	},
	plugins: [
		// Tell webpack to output our CSS to a separate file, not within our JS
		new MiniCssExtractPlugin( {
			filename: '[name].css',
			chunkFilename: '[id].css'
		} ),
	],
}
