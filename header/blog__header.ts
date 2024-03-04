import { logo_image_, } from '@rappstack/domain--server/logo'
import { site__title_ } from '@rappstack/domain--server/site'
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { a_, button_, div_, header_, nav_, ul_ } from 'relementjs/html'
import { line_, svg_ } from 'relementjs/svg'
import { hr_div_ } from '../hr/index.js'
export function blog__header_<env_T extends relement_env_T>({
	ctx,
	class: _class,
	is_open,
	...header_props
}:{
	ctx:wide_ctx_T
	class?:string
	is_open?:boolean
}&tag_props_T<HTMLElement>, ...children:tag_dom_T[]) {
	return (
		header_<env_T>({
			...header_props,
			class: class_(
				'blog__header',
				_class),
		}, [
			a_({
				id: 'skip-to-content',
				class: class_(
					'absolute',
					'z-50',
					'-top-full',
					'focus:top-4',
					'left-16',
					'py-2',
					'px-3',
					'bg-skin-accent',
					'text-skin-inverted',
					'transition-all'),
				href: '#main'
			}, 'Skip to content'),
			div_({
				class: class_(
					'nav-container',
					'mx-auto',
					'flex',
					'max-w-3xl',
					'flex-col',
					'sm:flex-row',
					'items-center',
					'justify-between')
			}, [
				div_({
					class: class_(
						'top-nav-wrap',
						'relative',
						'flex',
						'items-start',
						'sm:items-center',
						'justify-between',
						'w-full',
						'p-4',
						'sm:py-8'),
				}, [
					a_({
						href: '/',
						title: 'Home | ' + site__title_(ctx),
						class: class_(
							'logo',
							'absolute',
							'sm:static',
							'font-semibold',
							'text-xl',
							'sm:text-2xl',
							'whitespace-nowrap'),
					}, [
						logo_image_(ctx, {
							class: class_(
								'fill-current',
								'stroke-current',
								'text-current',
								'h-5',
								'w-6')
						}) ?? site__title_(ctx)
					]),
					nav_({
						id: 'blog__header__handle__nav',
						class: class_(
							'group/blog__header__handle__nav',
							is_open ? 'is-open' : null,
							'flex',
							'w-full',
							'flex-col',
							'sm:flex-row',
							'items-center',
							'sm:justify-end',
							'sm:ml-2',
							'sm:py-0',
							'sm:space-x-4'),
						/** @see {import('@rappstack/ui--browser--blog/header').blog__header__handle__nav__hyop} */
						hyop: 'blog__header__handle__nav__hyop'
					}, [
						button_({
							class: class_(
								'menu_handle',
								'sm:hidden',
								'self-end',
								'p-2',
								'focus-outline'),
							'aria-label': 'Open Menu',
							'aria-expanded': false,
							'aria-controls': 'menu-items',
							/** @see {import('@rappstack/ui--browser--blog/header').blog__header__handle__nav__button__hyop} */
							hyop: 'blog__header__handle__nav__button__hyop'
						}, [
							menu_icon__svg_({
								class: class_(
									'inline-block',
									'h-6',
									'w-6',
									'fill-skin-base',
									'group-hover:fill-skin-accent')
							})
						]),
						ul_({
							id: 'menu-items',
							class: class_(
								is_open ? 'flex' : 'hidden',
								'group-[.is-open]/blog__header__handle__nav:flex',
								'sm:flex',
								'flex-col',
								'sm:flex-row',
								'w-screen',
								'sm:w-auto',
								'mt-4',
								'sm:mt-0',
								'sm:ml-0',
								'gap-x-2',
								'sm:gap-x-5',
								'gap-y-2',
								'sm:gap-y-0')
						}, ...children)
					])
				])
			]),
			hr_div_({
				class: class_('px-4')
			})
		])
	)
}
function menu_icon__svg_({
	class:_class
}:{
	class?:string
}) {
  return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			width: '24',
			height: '24',
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			'stroke-width': '1.5',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round',
			class: class_(
				'menu-icon',
				'h-6',
				'w-6',
				'scale-125',
				'fill-skin-base',
				'transition-opacity',
				'duration-75',
				'ease-in-out',
				_class)
		}, [
			line_({
				x1: '7',
				y1: '12',
				x2: '21',
				y2: '12',
				class: class_(
					'line',
					'group-[.is-open]/blog__header__handle__nav:opacity-0')
			}),
			line_({
				x1: '3',
				y1: '6',
				x2: '21',
				y2: '6',
				class: class_(
					'line',
					'group-[.is-open]/blog__header__handle__nav:opacity-0')
			}),
			line_({
				x1: '12',
				y1: '18',
				x2: '21',
				y2: '18',
				class: class_(
					'line',
					'group-[.is-open]/blog__header__handle__nav:opacity-0')
			}),
			line_({
				x1: '18',
				y1: '6',
				x2: '6',
				y2: '18',
				class: class_(
					'close',
					'opacity-0',
					'group-[.is-open]/blog__header__handle__nav:opacity-100')
			}),
			line_({
				x1: '6',
				y1: '6',
				x2: '18',
				y2: '18',
				class: class_(
					'close',
					'opacity-0',
					'group-[.is-open]/blog__header__handle__nav:opacity-100')
			})
		])
	)
}
