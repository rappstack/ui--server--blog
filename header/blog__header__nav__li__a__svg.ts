import { class_ } from 'ctx-core/html'
import { type tag__dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { svg_ } from 'relementjs/svg'
export function blog__header__nav__li__a__svg_({
	active,
	class: _class,
	...svg_props
}:{
	active:boolean
	class?:string
}&tag_props_T<SVGSVGElement>, ...children:tag__dom_T[]) {
	return (
		svg_({
			...svg_props,
			class: class_(
				blog__header__nav__li__a__svg_class_({ active }),
				_class)
		}, ...children)
	)
}
export function blog__header__nav__li__a__svg_class_({
	active
}:{
	active:boolean
}) {
	return class_(active ? 'fill-skin-accent' : null)
}
