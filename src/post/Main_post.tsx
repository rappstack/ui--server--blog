import { type Post, str__slug_ } from '@btakita/domain--server--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { For, type ParentProps, Show } from 'solid-js'
import { Datetime } from '../date/Datetime.tsx'
import { Main } from '../main'
import { Tag } from '../tag'
export function Main_post($p:ParentProps<{
	ctx?:Ctx
	post:Post
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const post = $p.post
	const data = post.data
	const hero_image = data.hero_image
	const pubDate = data.pubDate
	const tags = data.tags
	const title = data.title
	const children = $p.children
	return (
		<ctx__Context.Provider value={ctx}>
			<Main class="Main_post" title={title}>
				<article>
					<Datetime datetime={pubDate} size="lg" class="my-2"/>
					<article
						id="article"
						role="article"
						class="prose mx-auto mt-8 max-w-3xl"
					>
						<Show when={hero_image}>
							<div class="hero-image">
								<img width={1020} height={510} src={hero_image} alt=""/>
							</div>
						</Show>
						<span
							{...typeof children === 'string'
								? { innerHTML: children }
								: { children }}
						/>
					</article>
					<ul class="tags-container my-8">
						<For each={tags}>{tag=>
							<Tag name={str__slug_(tag)}/>
						}</For>
					</ul>
				</article>
			</Main>
		</ctx__Context.Provider>
	)
}
