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
	const {title, link_left, link_middle, blink_right, link_label_left, link_text_middle, link_text_right, image} = attributes;

	return (
		<div { ...useBlockProps.save() } >
			{ image && <div  className='my-10 mx-10 ' style={{ backgroundImage: `url(${image})` }}>
				<div className="title">
					<h1 className="text-center text-4xl font-semibold">
						{ title }
					</h1>
					<div className="w-1/2 font-regular text-lg flex flex-wrap">
						{ link_left && <a href={ link_left } className="border-[1px] py-2 px-16 mt-10 w-max mx-auto border-[#002960] text-[#002960]">{ link_label_left }</a> }
					</div>
				</div>
			</div> }
		</div>
	);
};

export default Save;
