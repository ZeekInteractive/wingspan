<?php

namespace App;

/**
 * Define application constants
 */

define( 'THEME_VERSION', wp_get_theme()->version );
define( 'THEME_DIR', __DIR__ );
define( 'THEME_URL', get_stylesheet_directory_uri() );

require_once( THEME_DIR . '/src/enqueue.php' );
require_once( THEME_DIR . '/src/setup.php' );
require_once( THEME_DIR . '/src/embeds.php' );
require_once( THEME_DIR . '/src/custom-login.php' );
require_once( THEME_DIR . '/src/images.php' );
