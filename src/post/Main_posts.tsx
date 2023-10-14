import { type Post, post__slug__new } from '@btakita/domain--all--blog'
import { Card } from '@btakita/ui--all--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { For, type VoidProps } from 'solid-js'
import { Main } from '../main'
export function Main_posts($p:VoidProps<{
	ctx?:Ctx
	posts:Post[]
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const posts = $p.posts
	return (
		<Main
			ctx={ctx}
			class="Main_posts"
			title="Posts"
			desc="All the articles I've posted."
		>
			<ul>
				<For each={posts}>{post=>
					<Card href={`/posts/${post__slug__new(post)}`} post__data={post.data}></Card>
				}</For>
			</ul>
		</Main>
	)
}