import { type Ctx_wide_T } from 'ctx-core/be'
import { class_, dataset__data_attrs_ } from 'ctx-core/html'
import { fragment_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { h1_, main_, p_ } from 'relementjs/html'
import { breadcrumbs_c_ } from '../breadcrumb/index.js'
export function blog__main_c_<env_T extends relement_env_T>({
	ctx,
	title,
	title__class,
	description,
	dataset,
	...$p
}:{
	ctx:Ctx_wide_T<''>
	class?:string
	title?:string
	title__class?:string
	description?:string
	dataset?:Record<string, unknown>
}, ...children:tag__dom_T[]) {
	return fragment_<env_T>(
		breadcrumbs_c_({ ctx }),
		main_({
			id: 'main',
			class: class_('Main mx-auto w-full max-w-3xl px-4 pb-12', $p.class),
			...dataset__data_attrs_(dataset || {})
		},
		title ? h1_({ class: title__class }, title) : null,
		description ? p_({ class: 'mb-6 mt-2 italic' }, description) : null,
		...children))
}
