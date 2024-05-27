import { post_path_prefix_ } from '@rappstack/domain--any--blog/post'
import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { page_dehydrated_post_meta_a1_ } from '@rappstack/domain--server--blog/page'
import { schema_org_rdfa_property_ } from '@rappstack/domain--server/rdfa'
import { blog_author_date_reading_time__div_ } from '@rappstack/ui--any--blog/card'
import { dl_tree_, type dl_tree_props_T, type dt_dd_pair_T } from '@rappstack/ui--any/dl'
import { url__join } from 'ctx-core/uri'
import { raw_ } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { a_, h2_, p_ } from 'relementjs/html'
import { type Article } from 'schema-dts'
type props_T = dl_tree_props_T&{
	a_class?:string
	a_props?:Exclude<tag_props_T<HTMLAnchorElement>, 'class'>
	h2_class?:string
	h2_props?:Exclude<tag_props_T<HTMLAnchorElement>, 'class'>
	description_class?:string
}
export function blog_posts__dl_tree_($p:props_T) {
	let {
		ctx,
		div_props,
		a_class,
		a_props,
		h2_class,
		h2_props,
		description_class,
		...dl_tree_props
	} = $p
	return (
		dl_tree_({
			ctx,
			...dl_tree_props,
			div_props: { ...schema_org_rdfa_property_<Article>('articleBody'), ...div_props },
		}, ()=>
			page_dehydrated_post_meta_a1_(ctx)!.map(dehydrated_post_meta=>{
				const {
					title,
					description,
					description_html,
				} = dehydrated_post_meta
				return [
					h2_({
						href: url__join(post_path_prefix_(ctx), post_slug__new(dehydrated_post_meta)),
						class: h2_class,
						...h2_props,
					}, a_({
						href: url__join(post_path_prefix_(ctx), post_slug__new(dehydrated_post_meta)),
						class: a_class,
						...a_props,
					}, title)), [
						blog_author_date_reading_time__div_({
							dehydrated_post_meta,
							class: 'my-3',
							copy_class: 'italic'
						}),
						description_html
							? raw_(description_html)
							: p_({ class: description_class }, description),
					]
				]
			}, <dt_dd_pair_T[]>[]))
	)
}
