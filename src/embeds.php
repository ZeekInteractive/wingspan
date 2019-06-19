<?php

namespace App;

/*
 * Make embeds for YT and Vimeo responsive
 */
add_filter( 'embed_oembed_html', function ( $html, $url, $attr, $post_ID ) {
	if ( ! strpos( $url, 'youtube' ) && ! strpos( $url, 'youtu.be' ) && ! strpos( $url, 'vimeo' ) ) {
		return $html;
	}

	return '<div class="responsive-embed relative mb-4 overflow-hidden">' . $html . '</div>';
}, 10, 4 );
