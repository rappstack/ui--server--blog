import { type SearchItem } from '@btakita/domain--all--blog'
import { Main_search__onbind } from '@btakita/ui--all--blog'
import { type Ctx } from 'ctx-core/object'
import { raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { template_ } from 'relementjs/html'
import { V_main } from '../main/index.js'
export function V_main_search<env_T extends relement_env_T>(
	{ ctx, search_item_a }:{ ctx:Ctx, search_item_a:SearchItem[] },
	...children:tag__dom_T<env_T>[]
) {
	return (
		V_main<env_T>({
			ctx,
			title: 'Search',
			description: 'Search any article…',
			class: 'V_main_search',
			dataset: {
				onbind: ''+Main_search__onbind,
				// TODO: verify that Van is over-escaping quotes in JSON strings
				// search_item_a: JSON.stringify(search_item_a),
			}
		}, template_({ id: 'V_main_search__search_item_a', style: 'display: none;' },
				raw_(JSON.stringify(search_item_a))),
			...children)
	)
}
