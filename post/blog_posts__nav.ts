import { post_path__new } from '@rappstack/domain--any--blog/post'
import { page_count_, page_num_ } from '@rappstack/domain--server--blog/page'
import { button__a_ } from '@rappstack/ui--any/anchor'
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
import { nav_ } from 'relementjs/html'
import { left_arrow_, right_arrow_ } from '../icon/index.js'
export function blog_posts__nav_<env_T extends relement_env_T>({
	ctx,
}:{
	ctx:wide_ctx_T
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
			button__a_<env_T>({
				disabled: prev_class === 'disabled',
				href: post_path__new(
					ctx,
					page_num_(ctx) - 1 !== 1
						? '/' + (page_num_(ctx) - 1)
						: ''),
				class: class_(
					prev_class,
					'mr-4',
					'select-none',
					prev_class === 'disabled'
						? link_button_disabled_class
						: null,
					'group'),
				'aria_label': 'Previous'
			}, [
				left_arrow_({
					class: class_(
						prev_class === 'disabled'
							? link_button__svg_disabled_class
							: null,
						'inline-block',
						'h-6',
						'w-6',
						'scale-125',
						'fill-skin-base',
						'group-hover:fill-skin-accent')
				}),
				'Prev'
			]),
			button__a_<env_T>({
				disabled: next_class === 'disabled',
				href: post_path__new(ctx, page_num_(ctx) + 1),
				class: class_(
					next_class,
					'ml-4',
					'select-none',
					next_class === 'disabled'
						? link_button_disabled_class
						: null,
					'group'),
				'aria_label': 'Next'
			}, [
				'Next',
				right_arrow_({
					class: class_(
						next_class === 'disabled'
							? link_button__svg_disabled_class
							: null,
						'inline-block',
						'h-6',
						'w-6',
						'scale-125',
						'fill-skin-base',
						'group-hover:fill-skin-accent')
				})
			])
		])
	)
}
