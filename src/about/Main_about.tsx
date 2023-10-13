import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps, Show } from 'solid-js'
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
		<Main ctx={ctx} class="Main_about" title={title} desc={description}>
			<section
				id="about"
				class="prose mb-28 max-w-3xl prose-img:border-0"
				innerHTML={typeof children === 'string' ? children : null}
			>
				<Show when={children}>{children}</Show>
			</section>
		</Main>
	)
}