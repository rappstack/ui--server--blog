import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { For, type VoidProps } from 'solid-js'
import { Main } from '../main'
import { Tag } from './Tag.tsx'
export function Main_tags($p:VoidProps<{
	ctx?:Ctx
	tags:string[]
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const tags = $p.tags
	return (
		<Main
			ctx={ctx}
			class="Main_tags"
			title="Tags"
			description="All the tags used in posts."
		>
			<ul>
				<For each={tags}>{tag=>
					<Tag name={tag} size="lg"/>
				}</For>
			</ul>
		</Main>
	)
}