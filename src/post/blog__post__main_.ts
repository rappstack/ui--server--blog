import { estimate_read_time_html__new, type Post, str__slug__new } from '@btakita/domain--all--blog'
import { blog__datetime_c_ } from '@btakita/ui--all--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import * as htmlparser2 from 'htmlparser2'
import { fragment_, memo_, raw_, type tag__dom_T } from 'relementjs'
import { article_, div_, em_, img_, ul_ } from 'relementjs/html'
import { footnote_list_c_ } from '../footnote/index.js'
import { blog__main_c_ } from '../main/index.js'
import { repost_c_ } from '../repost/index.js'
import { blog__tag_c_ } from '../tag/index.js'
export function blog__post__main_({ ctx, post }:{
	ctx:Ctx
	post:Post
}, ...children:tag__dom_T<'server'>[]) {
	const { data } = post
	const {
		canonical_url,
		hero_image,
		pubDate,
		tags,
		title
	} = data
	const html = fragment_<'server'>(...children).render()
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
		blog__main_c_<'server'>({
				ctx,
				class: 'Main_post',
				title,
				dataset: {
					// onbind: blog__post__main__onbind
				}
			},
			div_({ class: 'blog__post__main__content' },
				div_({ class: 'datetime_A_estimate_read_time flex opacity-80' },
					blog__datetime_c_<'server'>({
						ctx,
						class: 'my-2 flex-grow',
						datetime: pubDate,
						size: 'lg'
					}),
					div_({
							class: class_('estimate_read_time mt-2 flex-grow', {
								show: estimate_read_time_html$()
							})
						},
						em_({ class: 'estimate_read_time_val text-base italic float-right' },
							raw_(estimate_read_time_html$.val))))),
			article_({ id: 'article', role: 'article', class: 'prose mx-auto mt-8 max-w-3xl' },
				hero_image
				&& div_({ class: 'hero-image' },
					img_({ width: 1020, height: 510, src: hero_image, alt: '' })),
				canonical_url
				&& repost_c_<'server'>({ href: canonical_url }),
				...children,
				footnote_list_c_<'server'>({ ctx })),
			ul_({ class: 'tags-container my-8' },
				...tags.map(tag=>
					blog__tag_c_<'server'>({ name: str__slug__new(tag) }))))
	)
}
