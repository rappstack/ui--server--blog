import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps } from 'solid-js'
import { Raw } from '../chidren'
import { Main } from '../main'
export function Main_about($p:ParentProps<{
	ctx?:Ctx
	title:string
	description?:string
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const title = $p.title
	const description = $p.description
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
				<Raw>{$p.children}</Raw>
			</article>
		</Main>
	)
}