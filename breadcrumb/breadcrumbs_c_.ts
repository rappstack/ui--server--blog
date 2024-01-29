import { isNumber_ } from 'ctx-core/number'
import { type relement_env_T } from 'relementjs'
import { a_, li_, nav_, span_, ul_ } from 'relementjs/html'
import './breadcrumbs_c.css'
import { type request_ctx_T, request_url_ } from 'relysjs/server'
export function breadcrumbs_c_<env_T extends relement_env_T>({
	ctx
}:{
	ctx:request_ctx_T
}) {
	// Remove current url path and remove trailing slash if exists
	const current_url_path:string = request_url_(ctx)
		.pathname
		.replace(/\/+$/, '')
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
		nav_<env_T>({ class: 'Breadcrumbs mx-auto mb-1 mt-8 w-full max-w-3xl px-4', 'aria-label': 'breadcrumb' },
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
	)
}
