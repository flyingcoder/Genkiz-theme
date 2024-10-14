/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

const Save = ( { attributes } ) => {
	const { image, link, text, title, subtitle } = attributes;

	return (
		<div { ...useBlockProps.save() } className="p-4 bg-white rounded shadow">
			{ image && <img src={ image } alt={ title } className="mb-4 rounded" /> }
			<h2 className="text-2xl font-bold mb-2">{ title }</h2>
			<h3 className="text-xl text-gray-600 mb-2">{ subtitle }</h3>
			<p className="text-gray-800 mb-4">{ text }</p>
			{ link && <a href={ link } className="text-blue-500 hover:underline">{ link }</a> }
		</div>
	);
};

export default Save;
