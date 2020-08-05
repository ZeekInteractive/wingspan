<?php

namespace App;

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style(
		'google-font',
		'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700',
		[],
		THEME_VERSION
	);

	wp_enqueue_script(
		'app-js',
		THEME_URL . '/dist/bundle.js',
		[],
		THEME_VERSION,
		true
	);
	
	/**
	 * Image/Iframe lazy loading
	 *
	 * @link https://github.com/aFarkas/lazysizes
	 */
	wp_enqueue_script(
		'lazysizes',
		THEME_URL . '/dist/lazysizes.js',
		[],
		THEME_VERSION,
		false
	);
});

add_action( 'wp_head', function () {
	$main_css = get_file_contents( '/dist/main.css' );

	if ( empty( $main_css ) ) {
		return false;
	}

	echo sprintf( '<style>%s</style>', $main_css );
});

/**
 * @param $path
 *
 * @return false|string|void
 */
function get_file_contents( $path ) {

	$path = sprintf( '%s/%s',
		get_template_directory(),
		$path
	);

	if ( empty( file_exists( $path ) ) ) {
		return;
	}

	return file_get_contents( $path );
}