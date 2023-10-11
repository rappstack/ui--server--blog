/// <reference lib="dom" />
import { blog__ctx__new } from '@btakita/domain--all--blog'
import { Astro__url__memo } from '@btakita/domain--server'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { Style_ } from '@ctx-core/ui-solid'
import { createMemo, type JSX, type ParentProps, splitProps } from 'solid-js'
export function HeaderLink($p:ParentProps<JSX.HTMLAttributes<HTMLAnchorElement>&{
	ctx?:Ctx
	href:string
}>) {
	const ctx = $p.ctx || ctx__Context__use() || blog__ctx__new()
	const href = $p.href
	const [
		pick_class_o,
		omit_class_o
	] = splitProps($p, ['class', 'href'])
	const pathname_ = createMemo(()=>
		Astro__url__memo(ctx)?.pathname)
	const active_ = createMemo(()=>
		href === pathname_() || href === pathname_()?.replace(/\/$/, ''))
	return (
		<ctx__Context.Provider value={ctx}>
			<Style/>
			<a
				href={href}
				class={
					class_('HeaderLink', pick_class_o.class, {
						active: active_()
					})
				}
				{...omit_class_o}
			>{$p.children}</a>
		</ctx__Context.Provider>
	)
}
// language=css
const Style = Style_(()=>`
	a.HeaderLink {
		display: inline-block;
		text-decoration: none;
	}
	a.HeaderLink.active {
		font-weight: bolder;
		text-decoration: underline;
	}
`)