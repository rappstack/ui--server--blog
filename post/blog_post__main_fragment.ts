import { prose_class } from '@btakita/ui--server--briantakita/prose'
import { slug__new } from '@rappstack/domain--any--blog/slug'
import {
	blog_post__canonical_url_,
	blog_post__hero_image_,
	blog_post__pub_date_,
	blog_post__tag_a1_,
	blog_post__title_
} from '@rappstack/domain--server--blog/post'
import { blog_datetime__div_ } from '@rappstack/ui--any--blog/date'
import { class_ } from 'ctx-core/html'
import { raw_ } from 'relementjs'
import { article_, div_, em_, img_, span_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { footnote_list__div_ } from '../footnote/index.js'
import { blog__main_fragment_ } from '../main/index.js'
import { repost__p_ } from '../repost/index.js'
import { blog_tag__li_ } from '../tag/index.js'
import { blog_post__estimate_read_minutes_, blog_post__html_ } from './blog_post__html.js'
export function blog_post__main_fragment_({
	ctx
}:{
	ctx:request_ctx_T
}) {
	return (
		blog__main_fragment_<'server'>({
			ctx,
			class: 'Main_post',
			h1_text: blog_post__title_(ctx),
		}, [
			div_({
				class: 'blog__post__main__content'
			}, [
				div_({
					class: class_(
						'datetime_A_estimate_read_time',
						'flex',
						'opacity-80')
				}, [
					blog_datetime__div_({
						class: class_(
							'my-2',
							'flex-grow'),
						datetime: blog_post__pub_date_(ctx),
						size: 'lg'
					}),
					div_({
						class: class_(
							'estimate_read_time',
							'mt-2',
							'flex-grow')
					}, [
						em_({
							class: class_(
								'estimate_read_time_val',
								'text-base',
								'italic',
								'float-right')
						}, [
							'READING TIME',
							span_({
								class: class_(
									'mx-2',
									'text-gray-300')
							}, '•'),
							blog_post__estimate_read_minutes_(ctx),
							' minute',
							blog_post__estimate_read_minutes_(ctx) !== 1
								? 's'
								: ''
						])
					])
				])
			]),
			article_({
				id: 'article',
				role: 'article',
				class: class_(
					'prose',
					'mt-8',
					'mx-auto',
					'max-w-3xl',
					prose_class)
			}, [
				blog_post__hero_image_(ctx)
				&& div_({
					class: 'hero-image'
				}, [
					img_({
						width: 1020,
						height: 510,
						src: blog_post__hero_image_(ctx),
						alt: ''
					})
				]),
				blog_post__canonical_url_(ctx)
				&& repost__p_({
					href: blog_post__canonical_url_(ctx)!
				}),
				raw_(blog_post__html_(ctx)),
				footnote_list__div_({ ctx })
			]),
			ul_({
				class: class_(
					'tag_a1-container',
					'my-8')
			}, ...(blog_post__tag_a1_(ctx) ?? []).map(tag=>
				blog_tag__li_({ name: slug__new(tag) })))
		])
	)
}
