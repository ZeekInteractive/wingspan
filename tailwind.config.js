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
    options: {
      whitelist,
      whitelistPatterns,
    }
  },
  
  theme: {

    extend: {},

    fontFamily: {
      'source-sans': ['Source Sans Pro', 'sans-serif']
    },

    container: {
      center: true,
      padding: '1rem',
    },

  },

  variants: {},

  plugins: [],
}


