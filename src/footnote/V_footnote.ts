import { footnote } from '@btakita/domain--server--blog'
import { has_dom } from '@ctx-core/dom'
import { type Ctx } from '@ctx-core/object'
import { H_, V_fragment } from '@ctx-core/vanjs'
import type { ChildDom, CoreVan, PlateVan, VanShape } from 'van-type-delegate'
import { _footnote__handle__html_id__new, _footnote__html_id__new } from './_footnote__html_id.ts'
export function V_footnote<V extends VanShape>(
	{ ctx, id, innerHTML }:{
		ctx:Ctx
		id:string, // handle Astrojs progressive rendering
		innerHTML?:string
	},
	...children:ChildDom<V>[]
) {
	const citation =
		footnote(
			ctx,
			id,
			innerHTML
				? innerHTML
				: has_dom
					? (H_<CoreVan>(ctx).div(...children as ChildDom<CoreVan>[]) as HTMLDivElement).innerHTML
					: V_fragment<PlateVan>({ ctx }, ...children as ChildDom<PlateVan>[]).render())
	const H = H_<V>(ctx)
	return (
		H.sup(
			H.a({
					id: _footnote__handle__html_id__new(citation),
					href: `#${(_footnote__html_id__new(citation))}`
				},
				`[${citation.seq}]`))
	)
}
