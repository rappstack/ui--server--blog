import { type Post, post__slug_ } from '@btakita/domain--server--blog'
import { Card } from '@btakita/ui--all--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { For, type VoidProps } from 'solid-js'
import { Main } from '../main'
export function Main_tag($p:VoidProps<{
	ctx?:Ctx
	tag:string
	posts:Post[]
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const tag = $p.tag
	const posts = $p.posts
	return (
		<Main
			ctx={ctx}
			class="Main_tag"
			title={`Tag:${tag}`}
			desc={`All the articles with the tag "${tag}".`}
		>
			<ul>
				<For each={posts}>{post=>
					<Card href={`/posts/${post__slug_(post)}`} post__data={post.data}/>
				}</For>
			</ul>
		</Main>
	)
}