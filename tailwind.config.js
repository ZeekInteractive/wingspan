const { fontFamily } = require('tailwindcss/defaultTheme')

const whitelist = []

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

module.exports = {
  purge: {
    content: ['**/*.php'],
    preserveHtmlElements: true,
    mode: 'layers',
    layers: ['utilities'],
    options: {
      whitelist,
      whitelistPatterns,
    }
  },

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  theme: {

    extend: {
      fontFamily: {
        sans: [`Source Sans Pro`, ...fontFamily.sans],
      },
    },

    container: {
      center: true,
      padding: `1rem`,
    },

  },

  variants: {},

  plugins: [],
}


