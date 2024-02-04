import { class_ } from 'ctx-core/html'
import { raw_, type relement_env_T, type tag_dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { a_ } from 'relementjs/html'
export function link_button_a_<env_T extends relement_env_T>({
	href,
	class:_class,
	aria_label,
	title,
	disabled,
	...props
}:{
	href:string
	class?:string
	aria_label?:string
	title?:string
	disabled?:boolean
}&tag_props_T<HTMLAnchorElement>, ...children:tag_dom_T[]) {
	return (
		a_<env_T>({
			...props,
			href: disabled ? '#' : href,
			tabindex: disabled ? '-1' : '0',
			class: class_(
				'group',
				'inline-block',
				'hover:text-skin-accent',
				_class),
			'aria-label': aria_label,
			title,
		}, ...children.map(child=>
			typeof child === 'string'
				? raw_(child)
				: child))
	)
}
