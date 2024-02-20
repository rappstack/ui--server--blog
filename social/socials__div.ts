import { social_a1_ } from '@rappstack/domain--server/social'
import { button__a_ } from '@rappstack/ui--any/anchor'
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type wide_ctx_T } from 'relementjs'
import { div_ } from 'relementjs/html'
import { social_icons } from './social_icons.js'
export function socials__div_<env_T extends relement_env_T>({
	ctx,
	centered,
	link_button_class,
}:{
	ctx:wide_ctx_T
	centered?:boolean
	link_button_class?:string
}) {
	return (
		div_<env_T>({
			class: class_(
				'Socials',
				'social-icons',
				centered ? 'flex' : null,
				'flex-wrap',
				'justify-center',
				'gap-1')
		}, ...social_a1_(ctx).map(social=>
			button__a_({
				href: social.href,
				class: class_(
					'link-button',
					'p-2',
					'sm:p-1',
					'hover:rotate-6',
					link_button_class),
				title: social.link_title
			}, social_icons[social.name])))
	)
}
