import { dehydrated_post_meta_a1_ } from '@rappstack/domain--any--blog/post'
import { type relement_env_T, type tag_dom_T } from 'relementjs'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_search__main_fragment_<env_T extends relement_env_T>({
	ctx,
	h1_text,
	h1_class,
}:{
	ctx:request_ctx_T
	h1_text?:string
	h1_class?:string
}, ...children:tag_dom_T[]) {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			class: 'blog_search__main_fragment',
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
