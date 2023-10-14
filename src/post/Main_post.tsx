import { type Post, str__slug_ } from '@btakita/domain--server--blog'
import { Datetime } from '@btakita/ui--all--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { For, type ParentProps, Show } from 'solid-js'
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
		<Main class="Main_post" ctx={ctx} title={title}>
			<article>
				<Datetime datetime={pubDate} size="lg" class="my-2"/>
				<article
					id="article"
					role="article"
					class="Main_post prose mx-auto mt-8 max-w-3xl"
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
	)
}
