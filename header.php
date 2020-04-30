<?php

namespace App; ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> class="bg-white antialiased h-full">
<head>
	<meta charset="<?php echo esc_attr( get_bloginfo( 'charset' ) ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class( 'font-sans font-normal text-black leading-normal text-base min-h-screen flex flex-col' ); ?>>

	<?php
	if ( function_exists( 'wp_body_open' ) ) {
		wp_body_open();
	} ?>

	<header class="px-4 mb-8">
		<h1><?php echo esc_html( get_bloginfo( 'name' ) ); ?></h1>
	</header>

	<main class="container flex-grow">
