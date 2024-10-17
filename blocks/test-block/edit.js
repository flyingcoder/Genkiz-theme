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

import { TextControl , Button } from '@wordpress/components';

const Edit = ( { attributes, setAttributes } ) => {
	const {title, link_left, link_middle, link_right, link_label_left, link_label_middle, link_label_right, image} = attributes;

	const onSelectImage = ( newImage ) => {
		setAttributes( { image: newImage.url } );
	};

	return (
		<div { ...useBlockProps()  } className='box flex flex-wrap justify-between max-w-[840px] m-auto'>

			<TextControl
				className='w-full'
				label="Title"
				value={ title }
				onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
			/>
			<div className='w-[30%]'>
				<TextControl
					label="Link"
					value={ link_left }
					onChange={ ( newValue ) => setAttributes( { link_left: newValue } ) }
				/>
				<TextControl
					label="Link label"
					value={ link_label_left }
					onChange={ ( newValue ) => setAttributes( { link_label_left: newValue } ) }
				/>
			</div>
			<div className='w-[30%]'>
				<TextControl
					label="Link"
					value={ link_middle }
					onChange={ ( newValue ) => setAttributes( { link_middle: newValue } ) }
				/>
				<TextControl
					label="Link label"
					value={ link_label_middle }
					onChange={ ( newValue ) => setAttributes( { link_label_middle: newValue } ) }
				/>
			</div>
			<div className='w-[30%]'>
				<TextControl
					label="Link"
					value={ link_right }
					onChange={ ( newValue ) => setAttributes( { link_right: newValue } ) }
				/>
				<TextControl
					label="Link label"
					value={ link_label_right }
					onChange={ ( newValue ) => setAttributes( { link_label_right: newValue } ) }
				/>
			</div>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ onSelectImage }
					allowedTypes={ ['image'] }
					value={ image ? [ image ] : [] }
					render={ ( { open } ) => (
						<div className='w-full text-center'>
							<Button onClick={ open } className={ image ? 'mx-auto w-[400px] h-[400px] image-button' : 'button button-large' }>
								{ 
									! image 
									? 'Upload Image' 
									: <img width="400" className='max-h-[400px]' src={ image } alt='' />
								}
							</Button>
						</div>
					) }
				/>
			</MediaUploadCheck>
		</div>
	);
};

export default Edit;
