<?php

namespace App;

/**
 * Lazy load images
 */
add_filter( 'wp_get_attachment_image_attributes', function ( $attr ) {
	// Bail on WordPress admin pages
	if ( is_admin() ) {
		return $attr;
	}

	// A simple 1x1 gif placeholder
	$placeholder = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

	// Add required class that the lazysizes library needs
	$attr['class'] .= ' lazyload blur-up';
	
	/**
	 * If srscet is present, set data-srcset attribute and an initial value
	 */
	if ( ! empty( $attr['srcset'] ) ) {
		$attr['data-srcset'] = $attr['srcset'];
		
		$attr['srcset'] = $placeholder;

	// Pass in lazysizes recommended data-sizes="auto" attribute
		$attr['data-sizes'] = 'auto';

	// Bail. Nothing else to do
		return $attr;
	}
	
	/**
	 * A srcset attribute wasn't present. Let's replace src with data-src and set an
	 * initial value
	 */

	// Set data-src to the src value
	$attr['data-src'] = $attr['src'];

	// Set initial value
	$attr['src'] = $placeholder;
	
	return $attr;
} );