import { blog_post__author_, blog_post__pub_date_ } from '@rappstack/domain--server--blog/post'
import { site__author_, site__author_img_url_ } from '@rappstack/domain--server/site'
import { formatted_date_ } from '@rappstack/ui--any--blog/date'
import { class_ } from 'ctx-core/html'
import { div_, img_, span_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { blog_post__estimate_read_minutes_ } from '../post/index.js'
type blog_author_date_reading_time__div_props_T = {
	ctx:request_ctx_T
	class?:string
}
export function blog_author_date_reading_time__div_($p:blog_author_date_reading_time__div_props_T) {
	const { ctx } = $p
	return (
		div_({
			class: class_(
				'flex',
				'flex-row',
				'w-full',
				'mb-6',
				'text-base',
				$p.class),
		}, [
			img_({
				src: site__author_img_url_(ctx),
				alt: site__author_(ctx),
				class: class_(
					'inline-block',
					'w-12',
					'h-12',
					'sm:w-12',
					'sm:h-12',
					'm-0',
					'rounded-full')
			}),
			div_({
				class: class_(
					'inline-flex',
					'flex-col',
					'ml-4',
					'text-skin-base')
			}, [
				span_({ class: 'sr-only' }, 'Author:'),
				blog_post__author_(ctx),
				div_([
					span_({ class: 'sr-only' }, 'Posted on:'),
					formatted_date_({ date: blog_post__pub_date_(ctx) }),
				]),
			]),
			div_({
				class: class_(
					'ml-auto',
					'flex',
					'items-end',
					'text-skin-base')
			}, [
				blog_post__estimate_read_minutes_(ctx),
				' minute',
				blog_post__estimate_read_minutes_(ctx) !== 1
					? 's'
					: ''
			]),
		])
	)
}
