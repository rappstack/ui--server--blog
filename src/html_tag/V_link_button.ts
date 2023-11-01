import { van_ } from '@btakita/domain--all--blog'
import { Raw } from '@btakita/ui--all--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import type { ChildDom, VanShape } from 'mini-van-plate/shared'
export function V_link_button<V extends VanShape>($p:{
	ctx:Ctx
	href:string
	class?:string
	ariaLabel?:string
	title?:string
	disabled?:boolean
}, ...children:ChildDom<V>[]) {
	const {
		ariaLabel,
		ctx,
		href,
		title,
		disabled
	} = $p
	const van = van_(ctx)
	const H = van.tags
	return (
		H.a({
			href: disabled ? '#' : href,
			tabindex: disabled ? '-1' : '0',
			class: class_('group inline-block hover:text-skin-accent', $p.class),
			ariaLabel,
			title,
		}, ...children.map(child=>
			child))
	)
}
