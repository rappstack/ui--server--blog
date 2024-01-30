import { class_ } from 'ctx-core/html'
import { type tag__dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { svg_ } from 'relementjs/svg'
export const blog__header__nav__button__svg_class = class_(
	'h-6',
	'w-6',
	'fill-skin-base',
	'hover:fill-skin-accent')
export function blog__header__nav__button__svg_({
	class: _class,
	...svg_props
}:{
	class?:string
}&tag_props_T<SVGSVGElement>, ...children:tag__dom_T[]) {
	return (
		svg_({
			...svg_props,
			class: class_(
				blog__header__nav__button__svg_class,
				_class)
		}, ...children)
	)
}
