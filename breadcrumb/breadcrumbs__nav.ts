import { breadcrumb_a1_, BreadcrumbList_id_ref_ } from '@rappstack/domain--server--blog/breadcrumb'
import { class_ } from 'ctx-core/html'
import { type relement_env_T } from 'relementjs'
import { a_, li_, nav_, span_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
type breadcrumbs__nav_props_T = {
	ctx:request_ctx_T
}
export function breadcrumbs__nav_<env_T extends relement_env_T>($p:breadcrumbs__nav_props_T) {
	const { ctx } = $p
	if (!breadcrumb_a1_(ctx).length) return
	const li_class = class_(
		'inline',
		'capitalize',
		'opacity-80',
		'[&:not(:last-child)]:hover:opacity-100')
	BreadcrumbList_id_ref_(ctx)
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
				...breadcrumb_a1_(ctx).map((breadcrumb, idx)=>
					li_({
						class: li_class,
					}, [
						idx + 1 === breadcrumb_a1_(ctx).length
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
