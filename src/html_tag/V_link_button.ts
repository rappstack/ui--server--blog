import { class_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import { type Node_T, raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { a_ } from 'relementjs/html'
export function V_link_button<env_T extends relement_env_T>($p:{
	href:string
	class?:string
	'aria-label'?:string
	title?:string
	disabled?:boolean
}, ...children:tag__dom_T<env_T>[]) {
	const {
		href,
		title,
		disabled
	} = $p
	return (
		a_({
			href: disabled ? '#' : href,
			tabindex: disabled ? '-1' : '0',
			class: class_('group inline-block hover:text-skin-accent', $p.class),
			'aria-label': $p['aria-label'],
			title,
		}, ...children.map(child=>
			typeof child === 'string'
				? raw_(child)
				: child))
	) as Node_T<env_T, HTMLElementTagNameMap['a']>
}
