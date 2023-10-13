import { type Post, post__slug_ } from '@btakita/domain--server--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { For, type VoidProps } from 'solid-js'
import { Card } from '../card'
import { Main } from '../main'
export function Main_posts($p:VoidProps<{
	ctx?:Ctx
	posts:Post[]
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const posts = $p.posts
	return (
		<ctx__Context.Provider value={ctx}>
			<Main title="Posts" desc="All the articles I've posted.">
				<ul>
					<For each={posts}>{post=>
						<Card href={`/posts/${post__slug_(post)}`} post={post}></Card>
					}</For>
				</ul>
			</Main>
		</ctx__Context.Provider>
	)
}