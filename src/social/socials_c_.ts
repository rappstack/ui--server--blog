import { socials_ } from '@btakita/domain--server--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import { type Node_T, type relement_env_T } from 'relementjs'
import { div_ } from 'relementjs/html'
import { link_button_c_ } from '../html_tag/index.js'
import { social_icons } from './social_icons.js'
import './socials_c.css'
export function socials_c_<env_T extends relement_env_T>({ ctx, ...$p }:{
	ctx:Ctx
	centered?:boolean
}) {
	const centered = $p.centered || false
	return (
		div_({ class: class_('Socials social-icons', centered ? 'flex' : '') },
			...socials_(ctx).map(social=>
				link_button_c_<env_T>({
					href: social.href,
					class: 'link-button',
					title: social.link_title
				}, social_icons[social.name])))
	) as Node_T<env_T, HTMLElementTagNameMap['div']>
}
