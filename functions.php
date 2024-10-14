<?php


function genkiz_theme_setup()
{
    add_theme_support('wp-block-styles');
}
add_action('after_setup_theme', 'genkiz_theme_setup');

function genkiz_blocks()
{
    $block_json_path = get_template_directory() . '/build/featured-offering-block/block.json';

    if (file_exists($block_json_path)) {
        register_block_type_from_metadata($block_json_path);
    }
}
add_action('init', 'genkiz_blocks');

function my_theme_setup()
{
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'yourthemename'),
    ));
}
add_action('after_setup_theme', 'my_theme_setup');
