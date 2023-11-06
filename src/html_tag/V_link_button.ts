import { H_ } from '@btakita/domain--all--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { V_raw } from '@ctx-core/vanjs'
import type { ChildDom, VanShape } from 'van-type-delegate'
export function V_link_button<V extends VanShape>($p:{
	ctx:Ctx
	href:string
	class?:string
	'aria-label'?:string
	title?:string
	disabled?:boolean
}, ...children:ChildDom<V>[]) {
	const {
		ctx,
		href,
		title,
		disabled
	} = $p
	const H = H_(ctx)
	return (
		H.a({
			href: disabled ? '#' : href,
			tabindex: disabled ? '-1' : '0',
			class: class_('group inline-block hover:text-skin-accent', $p.class),
			'aria-label': $p['aria-label'],
			title,
		}, ...children.map(child=>
			typeof child === 'string'
				? V_raw(ctx, child)
				: child))
	) as ChildDom<V>
}
