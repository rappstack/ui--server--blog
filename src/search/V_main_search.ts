import { H_, type SearchItem } from '@btakita/domain--all--blog'
import { Main_search__onbind } from '@btakita/ui--all--blog'
import { type Ctx } from '@ctx-core/object'
import { V_raw } from '@ctx-core/vanjs'
import type { ChildDom, PlateVan } from 'van-type-delegate'
import { V_main } from '../main'
export function V_main_search<V extends PlateVan>(
	{ ctx, search_item_a }:{ ctx:Ctx, search_item_a:SearchItem[] },
	...children:ChildDom<V>[]
) {
	const H = H_<V>(ctx)
	return (
		V_main({
			ctx,
			title: 'Search',
			description: 'Search any article…',
			class: 'V_main_search',
			dataset: {
				onbind: ''+Main_search__onbind,
				// TODO: verify that Van is over-escaping quotes in JSON strings
				// search_item_a: JSON.stringify(search_item_a),
			}
		}, H.tempate({ id: 'V_main_search__search_item_a', style: 'display: none;' },
				V_raw(ctx, JSON.stringify(search_item_a))),
			...children)
	)
}
