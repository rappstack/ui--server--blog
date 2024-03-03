import { social_a1_ } from '@rappstack/domain--server/social'
import { button__a_ } from '@rappstack/ui--any/anchor'
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
import type { tag_props_T } from 'relementjs/any'
import { div_ } from 'relementjs/html'
export function socials__div_<env_T extends relement_env_T>({
	ctx,
	centered,
	link_button_class,
	link_button_svg_class,
	class:_class,
	...div_props
}:{
	ctx:wide_ctx_T
	centered?:boolean
	link_button_class?:string
	link_button_svg_class?:string
	class?:string
}&tag_props_T<HTMLDivElement>) {
	return (
		div_<env_T>({
			...div_props,
			class: class_(
				'Socials',
				'social-icons',
				centered ? 'flex' : null,
				'flex-wrap',
				'justify-center',
				'gap-1',
				_class)
		}, ...social_a1_(ctx).map(social=>
			button__a_({
				href: social.href,
				class: class_(
					'link-button',
					'p-2',
					'sm:p-1',
					'hover:rotate-6',
					link_button_class),
				title: social.link_title,
				target: '_blank',
				rel: 'noopener noreferrer'
			}, social.icon_({ class: link_button_svg_class }))))
	)
}
