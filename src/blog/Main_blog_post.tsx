import { type Post } from '@btakita/domain--all--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps, Show } from 'solid-js'
import { FormattedDate } from '../date'
export function Main_blog_post($p:ParentProps<{
	ctx?:Ctx
}&Pick<Post, 'hero_image', 'pubDate', 'updated_date', 'title'>>) {
	const ctx = $p.ctx || ctx__Context__use()
	const hero_image = $p.hero_image
	const pubDate = $p.pubDate
	const updated_date = $p.updated_date
	const title = $p.title
	return (
		<ctx__Context.Provider value={ctx}>
			<article>
				<div class="hero-image">
					<Show when={hero_image}>
						<img width={1020} height={510} src={hero_image} alt=""/>
					</Show>
				</div>
				<div class="prose">
					<div class="title">
						<div class="date">
							<FormattedDate date={pubDate}/>
							<Show when={updated_date}>
								<div class="last-updated-on">
									Last updated on
									<FormattedDate date={updated_date}/>
								</div>
							</Show>
						</div>
						<h1>{title}</h1>
						<hr/>
					</div>
					<Show when={typeof $p.children === 'string'} fallback={$p.children}>
						<div innerHTML={$p.children}></div>
					</Show>
				</div>
			</article>
		</ctx__Context.Provider>
	)
}