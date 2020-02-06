const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const purgecss = require('@fullhuman/postcss-purgecss')

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
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ]
  }
}

const sass = {
  loader: 'sass-loader',
  options: {
    sourceMap: true,
  }
}

// Let's put our configuration together
const config = {
  entry: './assets/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: env,
  stats: {
    children: false,
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({}),
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
        use: [ MiniCssExtractPlugin.loader, css, postcss, sass ],
      },
    ]
  },
  plugins: [
    // Tell webpack to output our CSS to a separate file, not within our JS
    new MiniCssExtractPlugin('[name].css'),
  ],
}


// Optimize, if building for production
if (env === 'production') {

  const whitelist = [
  ]

  const whitelistPatterns = [
    /^home(-.*)?$/,
    /^blog(-.*)?$/,
    /^archive(-.*)?$/,
    /^date(-.*)?$/,
    /^error404(-.*)?$/,
    /^admin-bar(-.*)?$/,
    /^search(-.*)?$/,
    /^nav(-.*)?$/,
    /^wp(-.*)?$/,
    /^screen(-.*)?$/,
    /^navigation(-.*)?$/,
    /^(.*)-template(-.*)?$/,
    /^(.*)?-?single(-.*)?$/,
    /^postid-(.*)?$/,
    /^post-(.*)?$/,
    /^attachmentid-(.*)?$/,
    /^attachment(-.*)?$/,
    /^page(-.*)?$/,
    /^(post-type-)?archive(-.*)?$/,
    /^author(-.*)?$/,
    /^category(-.*)?$/,
    /^tag(-.*)?$/,
    /^menu(-.*)?$/,
    /^tags(-.*)?$/,
    /^tax-(.*)?$/,
    /^term-(.*)?$/,
    /^date-(.*)?$/,
    /^(.*)?-?paged(-.*)?$/,
    /^depth(-.*)?$/,
    /^children(-.*)?$/,
    /^h[1-6]?$/,
  ]

  postcss.options.plugins.push(
    purgecss({
      content: [
        './*.php',
        // Do not purge tailwindcss base styles, which include normalize
        './node_modules/tailwindcss/dist/base.css',
      ],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract(content) {
              return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
            }
          },
          extensions: ['php', 'js', 'svg'],
        },
      ],
      whitelistPatterns,
      whitelist,
    })
  )
}

module.exports = config
