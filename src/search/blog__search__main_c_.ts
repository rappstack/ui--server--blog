import { type SearchItem } from '@btakita/domain--all--blog'
import { blog__search__main__onbind } from '@btakita/ui--all--blog'
import { type Ctx } from 'ctx-core/object'
import { raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { template_ } from 'relementjs/html'
import { blog__main_c_ } from '../main/index.js'
export function blog__search__main_c_<env_T extends relement_env_T>(
	{ ctx, search_item_a }:{ ctx:Ctx, search_item_a:SearchItem[] },
	...children:tag__dom_T<env_T>[]
) {
	return (
		blog__main_c_<env_T>({
			ctx,
			title: 'Search',
			description: 'Search any article…',
			class: 'blog__search__main_c',
			dataset: {
				onbind: ''+blog__search__main__onbind,
				// TODO: verify that Van is over-escaping quotes in JSON strings
				// search_item_a: JSON.stringify(search_item_a),
			}
		}, template_({ id: 'blog__search_item_a_c', style: 'display: none;' },
				raw_(JSON.stringify(search_item_a))),
			...children)
	)
}
