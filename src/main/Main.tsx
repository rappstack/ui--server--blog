import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps, Show } from 'solid-js'
import { Breadcrumbs } from '../breadcrumb'
export function Main($p:ParentProps<{
	ctx?:Ctx
	class?:string
	title?:string
	desc?:string
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const title = $p.title
	const desc = $p.desc
	return (
		<ctx__Context.Provider value={ctx}>
			<Breadcrumbs/>
			<main id="main" class={class_('Main', $p.class)}>
				<Show when={title}>
					<h1>{title}</h1>
				</Show>
				<Show when={desc}>
					<p>{desc}</p>
				</Show>
				{$p.children}
			</main>
		</ctx__Context.Provider>
	)
}