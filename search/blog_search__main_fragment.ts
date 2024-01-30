import { type SearchItem } from '@btakita/domain--any--blog'
import { blog__search__main__onbind } from '@btakita/ui--any--blog/search'
import { type relement_env_T, type tag__dom_T } from 'relementjs'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_search__main_fragment_<env_T extends relement_env_T>({
	ctx,
	search_item_a
}:{
	ctx:request_ctx_T
	search_item_a:SearchItem[]
}, ...children:tag__dom_T[]) {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			title: 'Search',
			description: 'Search any article…',
			class: 'blog__search__main_c',
			dataset: {
				onbind: '' + blog__search__main__onbind,
				search_item_a: JSON.stringify(search_item_a),
			}
		}, ...children)
	)
}
