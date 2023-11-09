import { footnote_o_ } from '@btakita/domain--server--blog'
import { H_, V_fragment, V_raw } from '@ctx-core/vanjs'
import { type Ctx } from '@ctx-core/object'
import type { ChildDom, PlateVan } from 'van-type-delegate'
import { _footnote__html_id__new } from './_footnote__html_id'
export function V_footnote_list<van_T extends PlateVan>({ ctx, ...$p }:{
	ctx:Ctx
	class?:string
}):ChildDom<van_T> {
	const citation_o = footnote_o_(ctx)
	if (!citation_o) return
	const H = H_<van_T>(ctx)
	return (
		H.div({
			class: $p.class
		},
			...footnote_o_(ctx).footnote_a.map(footnote=>
				H.p({ id: _footnote__html_id__new(footnote) },
					`[${footnote.seq}]: `,
					H.em(V_raw<van_T, ChildDom<van_T>>(ctx, footnote.html)))))
	)
}
