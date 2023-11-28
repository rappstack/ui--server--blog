import {
	logo_image__enable_,
	logo_image__height_,
	logo_image__svg_,
	logo_image__width_,
	site__title_
} from '@btakita/domain--server--blog'
import { type Ctx } from 'ctx-core/object'
import { type Node_T, type relement_env_T, type tag__dom_T } from 'relementjs'
import { a_, button_, div_, header_, img_, nav_, ul_ } from 'relementjs/html'
import { line_, svg_ } from 'relementjs/svg'
import { hr_c_ } from '../html_tag/index.js'
import './header_c.css'
export function header_c_<env_T extends relement_env_T>({ ctx }:{ ctx:Ctx }, ...children:tag__dom_T<env_T>[]) {
	return (
		header_({ class: 'Header' },
			a_({
					id: 'skip-to-content',
					class: 'absolute -top-full left-16 z-50 bg-skin-accent px-3 py-2 text-skin-inverted transition-all focus:top-4',
					href: '#main'
				},
				'Skip to content' as string
			),
			div_({
					class: 'nav-container mx-auto flex max-w-3xl flex-col items-center justify-between sm:flex-row'
				},
				div_({ class: 'top-nav-wrap relative flex w-full items-start justify-between p-4 sm:items-center sm:py-8' },
					a_({
							href: '/',
							class: 'logo whitespace-nowrap absolute py-1 text-xl font-semibold sm:static sm:text-2xl'
						},
						logo_image__enable_(ctx)
							? img_({
								src: `/assets/images/${logo_image__svg_(ctx) ? 'logo.svg' : 'logo.png'}`,
								alt: site__title_(ctx),
								width: logo_image__width_(ctx),
								height: logo_image__height_(ctx),
							})
							: site__title_(ctx)),
					nav_({
							id: 'nav-menu',
							class: 'flex w-full flex-col items-center sm:ml-2 sm:flex-row sm:justify-end sm:space-x-4 sm:py-0'
						},
						button_({
								class: 'hamburger-menu focus-outline self-end p-2 sm:hidden',
								'aria-label': 'Open Menu',
								'aria-expanded': false,
								'aria-controls': 'menu-items'
							},
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
									class: 'menu-icon h-6 w-6 scale-125 fill-skin-base'
								},
								line_({ x1: '7', y1: '12', x2: '21', y2: '12', class: 'line' }),
								line_({ x1: '3', y1: '6', x2: '21', y2: '6', class: 'line' }),
								line_({ x1: '12', y1: '18', x2: '21', y2: '18', class: 'line' }),
								line_({ x1: '18', y1: '6', x2: '6', y2: '18', class: 'close' }),
								line_({ x1: '6', y1: '6', x2: '18', y2: '18', class: 'close' }))),
						ul_({
							id: 'menu-items',
							class: 'display-none sm:flex mt-4 grid w-44 grid-cols-2 grid-rows-4 gap-x-2 gap-y-2 sm:ml-0 sm:mt-0 sm:w-auto sm:gap-x-5 sm:gap-y-0'
						}, ...children)))),
			hr_c_({ ctx }))
	) as Node_T<env_T, HTMLElementTagNameMap['header']>
}
