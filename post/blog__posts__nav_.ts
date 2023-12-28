import { type Node_T, type relement_env_T } from 'relementjs'
import { nav_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
import { link_button_c_ } from '../html/index.js'
export function blog__posts__nav_<env_T extends relement_env_T>({
	page_num, page_count
}:{
	page_num:number
	page_count:number
}) {
	const prev = page_num > 1 ? '' : 'disabled'
	const next = page_num < page_count ? '' : 'disabled'
	if (page_count <= 1) return
	return (
		nav_({
			class: 'blog__posts__nav pagination-wrapper mb-8 mt-auto flex justify-center',
			'aria-label': 'Pagination',
		},
		link_button_c_<env_T>({
			disabled: prev === 'disabled',
			href: `/posts${page_num - 1 !== 1 ? '/' + (page_num - 1) : ''}`,
			class: `mr-4 select-none ${prev}`,
			'aria-label': 'Previous'
		},
		svg_({ xmlns: 'http://www.w3.org/2000/svg', class: `${prev}-svg` },
			path_({ d: 'M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z' })),
		'Prev'),
		link_button_c_<env_T>({
			disabled: next === 'disabled',
			href: `/posts/${page_num + 1}`,
			class: `ml-4 select-none ${next}`,
			'aria-label': 'Next'
		},
		'Next',
		svg_({ xmlns: 'http://www.w3.org/2000/svg', class: `${next}-svg` },
			path_({ d: 'm11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' }))))
	) as Node_T<env_T, HTMLElementTagNameMap['nav']>
}
