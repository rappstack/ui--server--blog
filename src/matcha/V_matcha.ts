import type { ChildDom, VanShape } from 'van-type-delegate'
export function V_matcha<
	V extends VanShape,
>({  whenthen }:{
	whenthen: [any, ()=>ChildDom<V>][]
}, ...children:ChildDom<V>[]) {
	for (let i=0; i < whenthen.length; i++) {
		const a = whenthen[i]
		if (a[0]) return a[1]()
	}
	return children as ChildDom<V>
}
