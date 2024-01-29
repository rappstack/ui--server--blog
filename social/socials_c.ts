import './socials_c.css'
import { type root_ctx_T } from '@btakita/domain--any--blog'
import { socials_ } from '@btakita/domain--server--blog'
import { class_ } from 'ctx-core/html'
import { type relement_env_T } from 'relementjs'
import { div_ } from 'relementjs/html'
import { link_button_c_ } from '../html/index.js'
import { social_icons } from './social_icons.js'
export function socials_c_<env_T extends relement_env_T>({
	ctx,
	centered,
	link_button_class,
}:{
	ctx:root_ctx_T
	centered?:boolean
	link_button_class?:string
}) {
	return (
		div_<env_T>({
			class: class_(
				'Socials social-icons',
				centered ? 'flex' : '')
		}, ...socials_(ctx).map(social=>
			link_button_c_<env_T>({
				href: social.href,
				class: class_(
					'link-button',
					link_button_class),
				title: social.link_title
			}, social_icons[social.name])))
	)
}
