import { class_, dataset__data_attrs_ } from 'ctx-core/html'
import { fragment_, type relement_env_T, type tag_dom_T } from 'relementjs'
import { div_, h1_, h2_, main_, p_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { breadcrumbs__nav_ } from '../breadcrumb/index.js'
export function blog__main_fragment_<env_T extends relement_env_T>({
	ctx,
	class: _class,
	hero_class,
	h1_text,
	h1_class,
	description_class,
	description,
	hyop,
	dataset,
}:{
	ctx:request_ctx_T
	class?:string
	hero_class?:string
	h1_text?:string
	h1_class?:string
	description_class?:string
	description?:string
	hyop?:string
	dataset?:Record<string, unknown>
}, ...children:tag_dom_T[]) {
	return fragment_<env_T>(
		breadcrumbs__nav_({ ctx }),
		main_({
			id: 'main',
			class: class_(
				'main',
				'mx-auto',
				'w-full',
				'max-w-3xl',
				'px-4',
				_class),
			hyop,
			...dataset__data_attrs_(dataset || {})
		}, [
			div_({
				class: class_(
					'hero',
					hero_class ?? 'prose mb-8')
			}, [
				h1_text ? h1_({ class: h1_class }, h1_text) : null,
				description
					? p_({
						class: class_(
							'italic',
							description_class)
					}, description)
					: null,
			]),
			...children
		]))
}
