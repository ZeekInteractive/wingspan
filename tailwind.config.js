const {fontFamily} = require( 'tailwindcss/defaultTheme' )

module.exports = {
	content: ['**/*.php'],

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


