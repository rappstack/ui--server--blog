import { run } from '@ctx-core/function'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps, Show } from 'solid-js'
import { template } from 'solid-js/web'
import { Main } from '../main'
export function Main_about($p:ParentProps<{
	ctx?:Ctx
	title:string
	description?:string
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const title = $p.title
	const description = $p.description
	const children = $p.children
	return (
		<Main
			ctx={ctx}
			class="Main_about prose"
			title={title}
			description={description}
		>
			<article
				id="about"
				class="mb-28 max-w-3xl prose-img:border-0"
			>
				<Show when={typeof children === 'string'} fallback={children}>
					{template(run(children))}
				</Show>
			</article>
		</Main>
	)
}