import { class_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { button_ } from 'relementjs/html'
export const blog__header__nav__button_class = 'p-1'
export function blog__header__nav__button_({
	class: _class,
	...button_props
}:{
	class?:string
}&tag_props_T<HTMLButtonElement>, ...children:tag_dom_T[]) {
	return button_({
		...button_props,
		class: class_(
			blog__header__nav__button_class,
			_class)
	})
}
