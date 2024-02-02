import { class_, dataset__data_attrs_ } from 'ctx-core/html'
import { fragment_, type relement_env_T, type tag_dom_T } from 'relementjs'
import { h1_, main_, p_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { breadcrumbs_nav_ } from '../breadcrumb/index.js'
export function blog__main_fragment_<env_T extends relement_env_T>({
	ctx,
	class: _class,
	title,
	title__class,
	description,
	hy__bind,
	dataset,
}:{
	ctx:request_ctx_T
	class?:string
	title?:string
	title__class?:string
	description?:string
	hy__bind?:string
	dataset?:Record<string, unknown>
}, ...children:tag_dom_T[]) {
	return fragment_<env_T>(
		breadcrumbs_nav_({ ctx }),
		main_({
			id: 'main',
			class: class_(
				'Main',
				'mx-auto',
				'w-full',
				'max-w-3xl',
				'px-4',
				'pb-12',
				_class),
			hy__bind,
			...dataset__data_attrs_(dataset || {})
		}, [
			title ? h1_({ class: title__class }, title) : null,
			description
				? p_({
					class: class_(
						'mb-6',
						'mt-2',
						'italic')
				}, description)
				: null,
			...children
		]))
}
