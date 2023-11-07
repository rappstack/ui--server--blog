import { estimate_read_time_html__new, H_, type Post, str__slug__new } from '@btakita/domain--all--blog'
import { V_datetime } from '@btakita/ui--all--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { reactive_derive__new, V_fragment, V_raw } from '@ctx-core/vanjs'
import * as htmlparser2 from 'htmlparser2'
import type { ChildDom, PlateVan } from 'van-type-delegate'
import { V_footnote_list } from '../footnote'
import { V_main } from '../main'
import { V_repost } from '../repost'
import { V_tag } from '../tag'
export function V_main_post<van_T extends PlateVan>({ ctx, post }:{
	ctx:Ctx
	post:Post
}, ...children:ChildDom<van_T>[]) {
	const { data } = post
	const {
		canonical_url,
		hero_image,
		pubDate,
		tags,
		title
	} = data
	const html = V_fragment<van_T>(ctx, ...children).render()
	const children__text$ = reactive_derive__new(ctx, ()=>{
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
	const estimate_read_time_html$ = reactive_derive__new(ctx, ()=>
		estimate_read_time_html__new(children__text$.val))
	const H = H_<van_T>(ctx)
	return (
		V_main<van_T>({
				ctx,
				class: 'Main_post',
				title,
				dataset: {
					// onbind: Main_post__onbind
				}
			},
			H.div({ class: 'Main_post__content' },
				H.div({ class: 'datetime_A_estimate_read_time flex opacity-80' },
					V_datetime<van_T>({ ctx, class: 'my-2 flex-grow', datetime: pubDate, size: 'lg' }),
					H.div({
							class: class_('estimate_read_time mt-2 flex-grow', {
								show: estimate_read_time_html$.val
							})
						},
						H.em({ class: 'estimate_read_time_val text-base italic float-right' },
							V_raw(ctx, estimate_read_time_html$.val))))),
			H.article({ id: 'article', role: 'article', class: 'prose mx-auto mt-8 max-w-3xl' },
				hero_image
				&& H.div({ class: 'hero-image' },
					H.img({ width: 1020, height: 510, src: hero_image, alt: '' })),
				canonical_url
				&& V_repost<van_T>({ ctx, href: canonical_url }),
				...children,
				V_footnote_list<van_T>({ ctx })),
			H.ul({ class: 'tags-container my-8' },
				...tags.map(tag=>
					V_tag<van_T>({ ctx, name: str__slug__new(tag) }))))
	)
}
