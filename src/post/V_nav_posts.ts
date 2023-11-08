import { type Ctx } from '@ctx-core/object'
import { H_, S_ } from '@ctx-core/vanjs'
import { V_link_button } from '../html_tag'
export function V_nav_posts({
	ctx, page_num, page_count
}:{
	ctx:Ctx
	page_num:number
	page_count:number
}) {
	const H = H_(ctx)
	const S = S_(ctx)
	const prev = page_num > 1 ? '' : 'disabled'
	const next = page_num < page_count ? '' : 'disabled'
	if (page_count <= 1) return
	return (
		H.nav({
				class: 'Nav_posts pagination-wrapper mb-8 mt-auto flex justify-center',
				'aria-label': 'Pagination',
			},
			V_link_button({
					ctx,
					disabled: prev === 'disabled',
					href: `/posts${page_num - 1 !== 1 ? '/' + (page_num - 1) : ''}`,
					class: `mr-4 select-none ${prev}`,
					'aria-label': 'Previous'
				},
				S.svg({ xmlns: 'http://www.w3.org/2000/svg', class: `${prev}-svg` },
					S.path({ d: 'M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z' })),
				'Prev'),
			V_link_button({
					ctx,
					disabled: next === 'disabled',
					href: `/posts/${page_num + 1}`,
					class: `ml-4 select-none ${next}`,
					'aria-label': 'Next'
				},
				'Next',
				S.svg({ xmlns: 'http://www.w3.org/2000/svg', class: `${next}-svg` },
					S.path({ d: 'm11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' })))))
}
