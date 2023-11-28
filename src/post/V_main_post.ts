import { estimate_read_time_html__new, type Post, str__slug__new } from '@btakita/domain--all--blog'
import { V_datetime } from '@btakita/ui--all--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import * as htmlparser2 from 'htmlparser2'
import { fragment_, memo_, raw_, type tag__dom_T } from 'relementjs'
import { article_, div_, em_, img_, ul_ } from 'relementjs/html'
import { V_footnote_list } from '../footnote/index.js'
import { V_main } from '../main/index.js'
import { V_repost } from '../repost/index.js'
import { V_tag } from '../tag/index.js'
export function V_main_post({ ctx, post }:{
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
		V_main<'server'>({
				ctx,
				class: 'Main_post',
				title,
				dataset: {
					// onbind: Main_post__onbind
				}
			},
			div_({ class: 'Main_post__content' },
				div_({ class: 'datetime_A_estimate_read_time flex opacity-80' },
					V_datetime<'server'>({
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
				&& V_repost<'server'>({ ctx, href: canonical_url }),
				...children,
				V_footnote_list<'server'>({ ctx })),
			ul_({ class: 'tags-container my-8' },
				...tags.map(tag=>
					V_tag<'server'>({ ctx, name: str__slug__new(tag) }))))
	)
}
