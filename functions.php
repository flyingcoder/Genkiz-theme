<?php


function genkiz_theme_setup()
{
    add_theme_support('wp-block-styles');
}
add_action('after_setup_theme', 'genkiz_theme_setup');

function my_custom_blocks()
{
    register_block_type(get_template_directory() . '/build/featured-offering-block/block.json');
    //register_block_type( get_template_directory() . '/build/testimonial/block.json' );
}
add_action('init', 'my_custom_blocks');
