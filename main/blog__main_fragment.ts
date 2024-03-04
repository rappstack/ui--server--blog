import { class_, dataset__data_attrs_ } from 'ctx-core/html'
import { fragment_, type relement_env_T, type tag_dom_T } from 'relementjs'
import { h1_, h2_, main_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { breadcrumbs__nav_ } from '../breadcrumb/index.js'
export function blog__main_fragment_<env_T extends relement_env_T>({
	ctx,
	class: _class,
	h1_text,
	title__class,
	description,
	hyop,
	dataset,
}:{
	ctx:request_ctx_T
	class?:string
	h1_text?:string
	title__class?:string
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
			h1_text ? h1_({ class: title__class }, h1_text) : null,
			description
				? h2_({
					class: class_(
						'mb-6',
						'mt-2',
						'italic')
				}, description)
				: null,
			...children
		]))
}
