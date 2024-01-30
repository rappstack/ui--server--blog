import { class_ } from 'ctx-core/html'
import { type tag__dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { a_ } from 'relementjs/html'
export function blog__header__nav__li__a_({
	active,
	href,
	class: _class,
	...a_props
}:{
	active:boolean
	href:string
	class?:string
}&tag_props_T<HTMLAnchorElement>, ...children:tag__dom_T[]) {
	return (
		a_({
			...a_props,
			href,
			class: class_(
				blog__header__nav__li__a_class_({ active }),
				_class)
		}, ...children)
	)
}
export function blog__header__nav__li__a_class_({
	active
}:{
	active:boolean
}) {
  return class_(
		'w-full',
		'group-[:nth-last-child(2)]/blog_header__nav_li:w-auto',
		'py-3',
		'sm:my-0',
		'sm:px-2',
		'px-4',
		'sm:py-1',
		'text-center',
		'font-medium',
		'hover:text-skin-accent',
		active
			? [
				'underline',
				'decoration-wavy',
				'decoration-2',
				'underline-offset-4'
			]
			: null)
}
