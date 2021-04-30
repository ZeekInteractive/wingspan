<?php

namespace App;

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
