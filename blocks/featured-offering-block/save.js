/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

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
	const { image, link, text, title, link_label, subtitle } = attributes;

	return (
		<div { ...useBlockProps.save() } className="my-10 mx-10">
			<div className="title">
				<h1 className="text-center text-4xl font-semibold">
					{ title }
				</h1>
				<h2 className="text-center mt-2 text-2xl font-regular">
					{ subtitle }
				</h2>
			</div>
			<div className="flex mt-16 gap-10 mx-10">
				<div className="w-1/2 font-regular text-lg flex flex-wrap">
					<RichText.Content tagName="div" value={ text } />
					{ link && <a href={ link } className="border-[1px] py-2 px-16 mt-10 w-max mx-auto border-[#002960] text-[#002960]">{ link_label }</a> }
				</div>
				{ image && <div  className='w-1/2 bg-cover' style={{ backgroundImage: `url(${image})` }}></div> }
			</div>
		</div>
	);
};

export default Save;
