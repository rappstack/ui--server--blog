import { estimate_read_time_html__new } from '@rappstack/domain--any--blog/post'
import { slug__new } from '@rappstack/domain--any--blog/slug'
import {
	blog_post__canonical_url_,
	blog_post__hero_image_,
	blog_post__pub_date_,
	blog_post__render,
	blog_post__tag_a1_,
	blog_post__title_
} from '@rappstack/domain--server--blog/post'
import { blog_datetime__div_ } from '@rappstack/ui--any--blog/date'
import { class_ } from 'ctx-core/html'
import * as htmlparser2 from 'htmlparser2'
import { memo_, raw_ } from 'relementjs'
import { article_, div_, em_, img_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { footnote_list__div_ } from '../footnote/index.js'
import { blog__main_fragment_ } from '../main/index.js'
import { repost__p_ } from '../repost/index.js'
import { blog_tag__li_ } from '../tag/index.js'
export function blog_post__main_fragment_({
	ctx
}:{
	ctx:request_ctx_T
}) {
	const html = '' + blog_post__render(ctx)
	const children__text$ = memo_(()=>{
		let children__text = ''
		const parser = new htmlparser2.Parser({
			ontext(text) {
				children__text += text
			}
		})
		parser.write(html)
		parser.end()
		return children__text
	})
	const estimate_read_time_html$ = memo_(()=>
		estimate_read_time_html__new(children__text$()))
	return (
		blog__main_fragment_<'server'>({
			ctx,
			class: 'Main_post',
			title: blog_post__title_(ctx),
			dataset: {
				// onbind: blog__post__main__onbind
			}
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
							'flex-grow',
							{ show: estimate_read_time_html$() })
					}, [
						em_({
							class: class_(
								'estimate_read_time_val',
								'text-base',
								'italic',
								'float-right')
						}, raw_(estimate_read_time_html$.val))
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
					'max-w-3xl')
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
				&& repost__p_({ href: blog_post__canonical_url_(ctx)! }),
				raw_(html),
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
