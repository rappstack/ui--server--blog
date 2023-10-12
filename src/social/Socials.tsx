import { type Social, socials__memo } from '@btakita/domain--server--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { For, type VoidProps } from 'solid-js'
import { LinkButton } from '../html_tag'
import { social_icons } from './social_icons'
export function Socials($p:VoidProps<{
	ctx?:Ctx
	centered?:boolean
}
>) {
	const ctx = $p.ctx || ctx__Context__use()
	const centered = $p.centered || false
	return (
		<ctx__Context.Provider value={ctx}>
			<div class={`social-icons ${centered ? 'flex' : ''}`}>
				<For<Social[]> each={socials__memo(ctx)}>{social=>
					<LinkButton
						href={social.href}
						class="link-button"
						title={social.link_title}
					>
						{social_icons[social.name]}
					</LinkButton>
				}</For>
			</div>
		</ctx__Context.Provider>
	)
}