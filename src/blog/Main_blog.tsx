import { type Post } from '@btakita/domain--all--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { For, type VoidProps } from 'solid-js'
import { FormattedDate } from '../date'
export function Main_blog($p:VoidProps<{
	ctx?:Ctx
	posts:Post[]
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	return (
		<ctx__Context.Provider value={ctx}>
			<main>
				<section>
					<ul>
						<For each={$p.posts}>{post=>
							<li>
								<a href={`/blog/${post.slug}/`}>
									<img width={720} height={360} src={post.data.hero_image} alt=""/>
									<h4 class="title">{post.data.title}</h4>
									<p class="date">
										<FormattedDate date={post.data.pub_date}/>
									</p>
								</a>
							</li>
						}</For>
					</ul>
				</section>
			</main>
		</ctx__Context.Provider>
	)
}