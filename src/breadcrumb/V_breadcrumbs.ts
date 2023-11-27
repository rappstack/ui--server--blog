import { Astro__url__pathname_ } from '@btakita/domain--server'
import { isNumber_ } from 'ctx-core/number'
import { type Ctx } from 'ctx-core/object'
import { type Node_T, type relement_env_T } from 'relementjs'
import { a_, li_, nav_, span_, ul_ } from 'relementjs/html'
import './Breadcrumbs.css'
export function V_breadcrumbs<env_T extends relement_env_T>({ ctx }:{ ctx:Ctx }) {
	// Remove current url path and remove trailing slash if exists
	const current_url_path:string = Astro__url__pathname_(ctx).replace(/\/+$/, '')
	// Get url array from path
	// eg: /tags/tailwindcss => ['tags', 'tailwindcss']
	const breadcrumb_a = current_url_path.split('/').slice(1)
	// if breadcrumb is Home > Posts > 1 <etc>
	// replace Posts with Posts (page number)
	if (breadcrumb_a[0] === 'posts' && isNumber_(breadcrumb_a[1])) {
		breadcrumb_a.splice(0, 2, `Posts (page ${breadcrumb_a[1] || 1})`)
	}
	if (!breadcrumb_a.length) return
	return (
		nav_({ class: 'Breadcrumbs mx-auto mb-1 mt-8 w-full max-w-3xl px-4', 'aria-label': 'breadcrumb' },
			ul_(
				li_(
					a_({ href: '/' }, 'Home'),
					span_({ 'aria-hidden': true }, ' > ')),
				...breadcrumb_a.map((breadcrumb, idx)=>
					li_(
						idx + 1 === breadcrumb_a.length
							? span_({ class: idx > 0 ? 'lowercase' : 'capitalize', 'aria-current': 'page' },
								breadcrumb)
							: [
								a_({ href: `/${breadcrumb}` }, breadcrumb),
								span_({ 'aria-hidden': true }, ' > ')
							]))))
	) as Node_T<env_T, HTMLElementTagNameMap['nav']>
}
