/// <reference lib="dom" />
import { class_, dataset__data_attrs_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps, Show } from 'solid-js'
import { Breadcrumbs } from '../breadcrumb'
import { Raw } from '../chidren'
export function Main($p:ParentProps<{
	ctx?:Ctx
	class?:string
	title?:string
	title__class?:string
	description?:string
	dataset?:Record<string, any>
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const title = $p.title
	const title__class = $p.title__class || 'text-2xl font-semibold sm:text-3xl'
	const description = $p.description
	const dataset = $p.dataset || {}
	return (
		<ctx__Context.Provider value={ctx}>
			<Breadcrumbs/>
			<main
				id="main"
				class={class_('Main mx-auto w-full max-w-3xl px-4 pb-12', $p.class)}
				{...dataset__data_attrs_(dataset)}
			>
				<Show when={title}>
					<h1 class={title__class}>{title}</h1>
				</Show>
				<Show when={description}>
					<p class="mb-6 mt-2 italic">{description}</p>
				</Show>
				<Raw>{$p.children}</Raw>
			</main>
		</ctx__Context.Provider>
	)
}
