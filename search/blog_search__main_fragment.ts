import { dehydrated_post_meta_a1_ } from '@rappstack/domain--any--blog/post'
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type tag_dom_T } from 'relementjs'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
type blog_search__main_fragment_props_T = {
	ctx:request_ctx_T
	class?:string
	hero_class?:string
	h1_text?:string
	h1_class?:string
}
export function blog_search__main_fragment_<env_T extends relement_env_T>($p:blog_search__main_fragment_props_T, ...children:tag_dom_T[]) {
	const {
		ctx,
		hero_class,
		h1_text,
		h1_class,
	} = $p
	return (
		blog__main_fragment_<env_T>({
			ctx,
			class: class_(
				'blog_search__main_fragment',
				$p.class),
			hero_class,
			h1_text,
			h1_class,
			/** @see {import('@rappstack/ui--browser--blog/search').blog_search__main__hyop} */
			hyop: 'blog_search__main__hyop',
			dataset: {
				dehydrated_post_meta_a1: encodeURIComponent(JSON.stringify(dehydrated_post_meta_a1_(ctx))),
			}
		}, ...children)
	)
}
