import { H_ } from '@btakita/domain--all--blog'
import { type Ctx } from '@ctx-core/object'
import type { ChildDom, VanShape } from 'van-type-delegate'
export function V_post_top_note<V extends VanShape>({ ctx }:{
	ctx:Ctx
}, ...children:ChildDom<V>[]) {
	const H = H_<V>(ctx)
	return (
		H.p(
			H.em(
				...children))
	)
}
