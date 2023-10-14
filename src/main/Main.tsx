/// <reference lib="dom" />
import { run } from '@ctx-core/function'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps, Show } from 'solid-js'
import { template } from 'solid-js/web'
import { Breadcrumbs } from '../breadcrumb'
export function Main($p:ParentProps<{
	ctx?:Ctx
	class?:string
	title?:string
	title__class?:string
	desc?:string
	dataset?:Record<string, any>
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const title = $p.title
	const title__class = $p.title__class || 'text-2xl font-semibold sm:text-3xl'
	const desc = $p.desc
	const dataset = $p.dataset || {}
	const children = $p.children
	return (
		<ctx__Context.Provider value={ctx}>
			<Breadcrumbs/>
			<main
				id="main"
				class={class_('Main mx-auto w-full max-w-3xl px-4 pb-12', $p.class)}
				{...Object.entries(dataset).reduce((o, [key, value])=>{
					o[`data-${key}`] = value
					return o
				}, {} as Record<string, any>)}
			>
				<Show when={title}>
					<h1 class={title__class}>{title}</h1>
				</Show>
				<Show when={desc}>
					<p class="mb-6 mt-2 italic">{desc}</p>
				</Show>
				<Show when={typeof children === 'string'} fallback={children}>
					{run(template(children))}
				</Show>
			</main>
		</ctx__Context.Provider>
	)
}