import {
	dehydrated_post_meta_T,
	estimate_read_time_html__new,
	type Post,
	str__slug__new
} from '@btakita/domain--any--blog'
import { blog_datetime__div_ } from '@btakita/ui--any--blog/date'
import { class_ } from 'ctx-core/html'
import * as htmlparser2 from 'htmlparser2'
import { fragment_, memo_, raw_, type tag_dom_T } from 'relementjs'
import { article_, div_, em_, img_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { footnote_list__div_ } from '../footnote/index.js'
import { blog__main_fragment_ } from '../main/index.ts'
import { repost_p_ } from '../repost/index.js'
import { blog_tag__li_ } from '../tag/index.js'
export function blog_post__main_fragment_({ ctx, dehydrated_post_meta }:{
	ctx:request_ctx_T
	dehydrated_post_meta:dehydrated_post_meta_T
}, ...children:tag_dom_T[]) {
	const {
		canonical_url,
		hero_image,
		pub_date,
		tag_a1,
		title
	} = dehydrated_post_meta
	const html = '' + fragment_(...children)
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
			title,
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
						datetime: pub_date,
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
				hero_image
				&& div_({
					class: 'hero-image'
				}, [
					img_({
						width: 1020,
						height: 510,
						src: hero_image,
						alt: ''
					})
				]),
				canonical_url
				&& repost_p_({ href: canonical_url }),
				...children,
				footnote_list__div_({ ctx })
			]),
			ul_({
				class: class_(
					'tag_a1-container',
					'my-8')
			}, ...tag_a1.map(tag=>
				blog_tag__li_({ name: str__slug__new(tag) })))
		])
	)
}
