import { type dehydrated_post_meta_T } from '@btakita/domain--any--blog'
import { blog_search__div__onbind } from '@btakita/ui--any--blog/search'
import { type relement_env_T, type tag_dom_T } from 'relementjs'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_search__main_fragment_<env_T extends relement_env_T>({
	ctx,
	dehydrated_post_meta_a1
}:{
	ctx:request_ctx_T
	dehydrated_post_meta_a1:dehydrated_post_meta_T[]
}, ...children:tag_dom_T[]) {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			title: 'Search',
			description: 'Search any article…',
			class: 'blog__search__main_c',
			dataset: {
				onbind: '' + blog_search__div__onbind,
				dehydrated_post_meta_a1: JSON.stringify(dehydrated_post_meta_a1),
			}
		}, ...children)
	)
}
