import { V_raw } from '@btakita/ui--all--blog'
import { type Ctx } from '@ctx-core/object'
import type { ChildDom, VanShape } from 'van-type-delegate'
import { V_matcha } from './V_matcha'
export function V_matcha_html_children<V extends VanShape>(
	{ ctx, whenthen, innerHTML, innerText }:{
		ctx:Ctx
		whenthen:[any, ()=>ChildDom<V>][]
		innerHTML?:string
		innerText?:number|string
	},
	...children:ChildDom<V>[]
):ChildDom<V> {
	if (children.length) {
		return children.map(child=>
			typeof child === 'string'
				? V_raw<V>({ ctx, html: child })
				: child) as ChildDom<V>
	}
	if (innerHTML) return V_raw<V>({ ctx, html: innerHTML }) as ChildDom<V>
	if (innerText) return innerText
	return V_matcha<V>({ whenthen })
}
