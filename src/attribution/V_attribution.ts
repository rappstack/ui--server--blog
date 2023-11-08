import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { H_ } from '@ctx-core/vanjs'
import type { ChildDom, VanShape } from 'van-type-delegate'
import { V_footnote } from '../footnote'
import { V_matcha_html_children } from '../matcha'
export function V_attribution<V extends VanShape>(
	{ ctx, attribution_id, ...props }:{ ctx:Ctx, attribution_id:string, class?:string },
	...children:ChildDom<V>[]
) {
	const H = H_<V>(ctx)
	return (
		V_footnote<V>({ ctx, id: attribution_id },
			H.span(	{
				...props,
				class: class_('P_attribution', props.class),
				'data-attribution_id': attribution_id
			},
				V_matcha_html_children<V>({
					ctx,
					whenthen: [[true, ()=>'' as ChildDom<V>]]
				}, ...children) as ChildDom<V>))
	)
}
