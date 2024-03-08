import { jsonld__add } from '@rappstack/domain--server/jsonld'
import { site__title_ } from '@rappstack/domain--server/site'
import { request_url__origin_ } from '@rappstack/ui--server/request'
import { class_ } from 'ctx-core/html'
import { isNumber_ } from 'ctx-core/number'
import { url__join } from 'ctx-core/uri'
import { raw_, type relement_env_T } from 'relementjs'
import { a_, li_, nav_, script_, span_, ul_ } from 'relementjs/html'
import { type request_ctx_T, request_url_ } from 'relysjs/server'
import type { BreadcrumbList } from '@btakita/schema-dts'
export function breadcrumbs__nav_<env_T extends relement_env_T>({
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
	if (breadcrumb_a[0] === 'posts' && isNumber_(breadcrumb_a[1]) && !breadcrumb_a[1].includes('-')) {
		breadcrumb_a.splice(0, 2, `Posts (page ${breadcrumb_a[1] || 1})`)
	}
	if (!breadcrumb_a.length) return
	const li_class = class_(
		'inline',
		'capitalize',
		'opacity-80',
		'[&:not(:last-child)]:hover:opacity-100')
	jsonld__add(ctx, <BreadcrumbList>{
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		'@id': url__join(request_url__origin_(ctx), '#BreadcrumbList'),
		name: 'BreadcrumbList | ' + site__title_(ctx),
		itemListElement: [
			{
				'@type': 'ListItem',
				'@id': url__join(request_url__origin_(ctx), '#BreadcrumbList_home'),
				position: 1,
				name: 'Home',
				item: request_url__origin_(ctx)
			},
			...breadcrumb_a.map((breadcrumb, idx)=>({
				'@type': 'ListItem',
				'@id': url__join(request_url__origin_(ctx), `#BreadcrumbList_${breadcrumb.replaceAll('/', '_')}`),
				position: idx + 2,
				name: breadcrumb,
				item: url__join(request_url__origin_(ctx), breadcrumb)
			}))
		]
	})
	return [
		nav_<env_T>({
			id: 'breadcrumb',
			class: class_(
				'Breadcrumbs',
				'mx-auto',
				'mt-8',
				'mb-4',
				'w-full',
				'max-w-3xl',
				'px-4'),
			'aria-label': 'breadcrumb',
		}, [
			ul_([
				li_({
					class: li_class,
				}, [
					a_({
						href: '/',
						class: class_(
							'underline',
							'decoration-dashed'),
					}, 'Home'),
					span_({ 'aria-hidden': true }, ' > ')
				]),
				...breadcrumb_a.map((breadcrumb, idx)=>
					li_({
						class: li_class,
					}, [
						idx + 1 === breadcrumb_a.length
							? span_({ class: idx > 0 ? 'lowercase' : 'capitalize', 'aria-current': 'page' },
								breadcrumb)
							: [
								a_({
									href: `/${breadcrumb}`,
									class: class_(
										'underline',
										'decoration-dashed'),
								}, breadcrumb),
								span_({ 'aria-hidden': true }, ' > ')
							]
					]))
			])
		]),
	]
}
