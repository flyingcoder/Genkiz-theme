/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import { Button, TextControl } from '@wordpress/components';

const Edit = ( { attributes, setAttributes } ) => {
	const { image, link, text, title, link_label, subtitle } = attributes;

	const onSelectImage = ( newImage ) => {
		setAttributes( { image: newImage.url } );
	};

	return (
		<div { ...useBlockProps() }>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ onSelectImage }
					allowedTypes={ ['image'] }
					value={ image ? [ image ] : [] }
					render={ ( { open } ) => (
						<Button onClick={ open } className={ image ? 'image-button' : 'button button-large' }>
							{ ! image ? 'Upload Image' : <img src={ image } alt={ title } /> }
						</Button>
					) }
				/>
			</MediaUploadCheck>
			<TextControl
				label="Title"
				value={ title }
				onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
			/>
			<TextControl
				label="Subtitle"
				value={ subtitle }
				onChange={ ( newValue ) => setAttributes( { subtitle: newValue } ) }
			/>
			<TextControl
				label="Link"
				value={ link }
				onChange={ ( newValue ) => setAttributes( { link: newValue } ) }
			/>
			<TextControl
				label="Link label"
				value={ link_label }
				onChange={ ( newValue ) => setAttributes( { link_label: newValue } ) }
			/>
			<TextControl
				label="Text"
				value={ text }
				onChange={ ( newValue ) => setAttributes( { text: newValue } ) }
			/>
		</div>
	);
};

export default Edit;
