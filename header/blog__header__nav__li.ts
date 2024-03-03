import { class_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { li_ } from 'relementjs/html'
export const blog__header__nav__li_class = class_(
	'group/blog__header__nav__li',
	'col-span-2',
	'[nth-last-child(1)]:col-span-1',
	'[nth-last-child(2)]:col-span-1',
	'flex',
	'items-center',
	'justify-center')
export function blog__header__nav__li_({
	class: _class,
	...li_props
}:{
	class?:string
}&tag_props_T<HTMLLIElement>, ...children:tag_dom_T[]) {
	return (
		li_({
			...li_props,
			class: class_(
				blog__header__nav__li_class,
				_class)
		}, ...children)
	)
}
