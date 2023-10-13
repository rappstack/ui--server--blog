import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps } from 'solid-js'
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
			desc={description}
		>
			<article
				id="about"
				class="mb-28 max-w-3xl prose-img:border-0"
				{...typeof children === 'string'
						? { innerHTML: children }
						: { children }
				}
			></article>
		</Main>
	)
}