const path = require( 'path' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const CssMinimizerPlugin = require( "css-minimizer-webpack-plugin" )

const env = process.env.NODE_ENV

const css = {
	loader: 'css-loader',
	options: {
		url: false,
		sourceMap: true,
	}
}

const postcss = {
	loader: 'postcss-loader',
	options: {
		sourceMap: true,
		postcssOptions: {
			plugins: [
				require( 'tailwindcss' ),
				require( 'autoprefixer' ),
			]
		}
	}
}

const sass = {
	loader: 'sass-loader',
	options: {
		sourceMap: true,
	}
}

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
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		]
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
			// Handle our .scss files through our loaders
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, css, postcss, sass],
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
