<?php

namespace App;

/**
 * Load the CSS
 */
add_action( 'login_head', function() { ?>
	<style type="text/css">
		body.login {
			background: #000;
		}
		/*.login h1 a {*/
		/*	background-image: url(*/<?php //echo get_bloginfo( 'stylesheet_directory' ) . '/assets/images/logo.png'
		//	?>/*);*/
		/*	background-size: contain;*/
		/*	height: ;*/
		/*	width: ;*/
		/*}*/
		#wp-submit {
			background: #000;
			border: 1px solid #000;
			box-shadow: none;
			color: #ffffff;
			text-shadow: none;
			text-transform: uppercase;
			transition: all 300ms ease-in-out;
		}
		#wp-submit:hover {
			background-color: #fff;
			border: 2px solid #000;
			box-shadow: none;
			color: #000;
		}
		.login a {
			color: #fff;
		}

		.login #nav a {
			color: #fff;
		}
		.login #nav a:hover {
			color: #fff;
		}
		.login #backtoblog a {
			color: #fff;
		}
		.login #backtoblog a:hover {
			color: #fff;
		}
	</style>
	<?php
} );

/**
 * Change header link to our site instead of wordpress.org
 */
add_filter( 'login_headerurl', function() {
	return esc_url( get_bloginfo( 'url' ) );
} );

/**
 * Change logo title in from WordPress to our site name
 */
add_filter( 'login_headertext', function() {
	return esc_html( get_bloginfo( 'name' ) );
} );