import { H_ } from '@btakita/domain--all--blog'
import { socials_ } from '@btakita/domain--server--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import type { VanShape } from 'van-type-delegate'
import { V_link_button } from '../html_tag'
import { social_icons } from './social_icons'
import './Socials.css'
export function V_socials<V extends VanShape>({ ctx, ...$p }:{
	ctx:Ctx
	centered?:boolean
}) {
	const centered = $p.centered || false
	const H = H_<V>(ctx)
	return (
		H.div({ class: class_('Socials social-icons', centered ? 'flex' : '') },
			...socials_(ctx).map(social=>
				V_link_button<V>({
					ctx,
					href: social.href,
					class: 'link-button',
					title: social.link_title
				}, social_icons[social.name])))
	)
}
