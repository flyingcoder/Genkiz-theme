<?php
/**
 * The header for our theme
 *
 * @package YourThemeName
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    
    <?php wp_head(); // This function is important to include all necessary styles and scripts ?>
</head>
<body <?php body_class(); ?>>
    <header>
        <div class="site-branding">
            <?php if (is_front_page() && is_home()): ?>
                        <h1 class="site-title"><?php bloginfo('name'); ?></h1>
            <?php else: ?>
                        <p class="site-title"><?php bloginfo('name'); ?></p>
            <?php endif; ?>

            <p class="site-description"><?php bloginfo('description'); ?></p>
        </div>

        <nav>
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_id' => 'primary-menu',
            ));
            ?>
        </nav>
    </header>
