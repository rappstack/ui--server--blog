import { dehydrated_post_meta_a1_ } from '@btakita/domain--any--blog'
import { type relement_env_T, type tag_dom_T } from 'relementjs'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_search__main_fragment_<env_T extends relement_env_T>({
	ctx,
}:{
	ctx:request_ctx_T
}, ...children:tag_dom_T[]) {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			class: 'blog__search__main_c',
			hy__bind: 'blog_search__main',
			dataset: {
				dehydrated_post_meta_a1: encodeURIComponent(JSON.stringify(dehydrated_post_meta_a1_(ctx))),
			}
		}, ...children)
	)
}
