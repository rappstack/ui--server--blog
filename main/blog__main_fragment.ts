import { md__inline_raw_, md__raw_ } from '@rappstack/ui--any/md'
import { class_, dataset__data_attrs_ } from 'ctx-core/html'
import { fragment_, type relement_env_T, type tag_dom_T } from 'relementjs'
import { div_, h1_, main_, p_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { breadcrumbs__nav_ } from '../breadcrumb/index.js'
type blog__main_fragment_props_T = {
	ctx:request_ctx_T
	class?:string
	hero_class?:string
	h1_text?:string
	h1_class?:string
	tween__dom?:tag_dom_T
	hero_p_class?:string
	hero_p_text?:string
	hyop?:string
	dataset?:Record<string, unknown>
}
export function blog__main_fragment_<env_T extends relement_env_T>($p:blog__main_fragment_props_T, ...children:tag_dom_T[]) {
	const {
		ctx,
		class: _class,
		hero_class,
		h1_text,
		h1_class,
		tween__dom,
		hero_p_class,
		hero_p_text,
		hyop,
		dataset,
	} = $p
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
					hero_class ?? 'prose')
			}, [
				h1_text ? h1_({ class: h1_class }, h1_text) : null,
				tween__dom,
				hero_p_text
					? p_({
						class: class_(
							'mt-0',
							'italic',
							hero_p_class)
					}, md__raw_(hero_p_text))
					: null,
			]),
			...children
		]))
}
