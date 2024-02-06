import { type root_ctx_T } from '@rappstack/domain--any--blog'
import { page_count_, page_num_ } from '@rappstack/domain--server--blog'
import { class_ } from 'ctx-core/html'
import { type relement_env_T } from 'relementjs'
import { nav_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
import { link_button_a_ } from '../anchor/index.js'
export function blog_posts__nav_<env_T extends relement_env_T>({
	ctx,
}:{
	ctx:root_ctx_T
}) {
	if (page_count_(ctx) <= 1) return
	const prev_class = page_num_(ctx) > 1 ? '' : 'disabled'
	const next_class = page_num_(ctx) < page_count_(ctx) ? '' : 'disabled'
	const link_button_disabled_class = class_(
		'pointer-events-none',
		'select-none',
		'opacity-50',
		'hover:text-skin-base',
		'group-hover:fill-skin-base')
	const link_button__svg_disabled_class = class_(
		'group-hover:!fill-skin-base')
	return (
		nav_<env_T>({
			class: class_(
				'blog__posts__nav',
				'pagination-wrapper',
				'flex',
				'justify-center',
				'mb-8',
				'mt-auto'),
			'aria-label': 'Pagination',
		}, [
			link_button_a_<env_T>({
				disabled: prev_class === 'disabled',
				href: `/posts${page_num_(ctx) - 1 !== 1 ? '/' + (page_num_(ctx) - 1) : ''}`,
				class: class_(
					prev_class,
					'mr-4',
					'select-none',
					prev_class === 'disabled'
						? link_button_disabled_class
						: null),
				'aria_label': 'Previous'
			}, [
				svg_({
					xmlns: 'http://www.w3.org/2000/svg',
					class: class_(
						prev_class === 'disabled'
							? link_button__svg_disabled_class
							: null)
				}, [
					path_({ d: 'M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z' })
				]),
				'Prev'
			]),
			link_button_a_<env_T>({
				disabled: next_class === 'disabled',
				href: `/posts/${page_num_(ctx) + 1}`,
				class: class_(
					next_class,
					'ml-4',
					'select-none',
					next_class === 'disabled'
						? link_button_disabled_class
						: null),
				'aria_label': 'Next'
			}, [
				'Next',
				svg_({
					xmlns: 'http://www.w3.org/2000/svg',
					class: class_(
						next_class === 'disabled'
							? link_button__svg_disabled_class
							: null)
				}, [
					path_({ d: 'm11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' })
				])
			])
		])
	)
}
