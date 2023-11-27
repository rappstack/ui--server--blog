import { socials_ } from '@btakita/domain--server--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import { type Node_T, type relement_env_T } from 'relementjs'
import { div_ } from 'relementjs/html'
import { V_link_button } from '../html_tag/index.js'
import { social_icons } from './social_icons.js'
import './Socials.css'
export function V_socials<env_T extends relement_env_T>({ ctx, ...$p }:{
	ctx:Ctx
	centered?:boolean
}) {
	const centered = $p.centered || false
	return (
		div_({ class: class_('Socials social-icons', centered ? 'flex' : '') },
			...socials_(ctx).map(social=>
				V_link_button<env_T>({
					ctx,
					href: social.href,
					class: 'link-button',
					title: social.link_title
				}, social_icons[social.name])))
	) as Node_T<env_T, HTMLElementTagNameMap['div']>
}
