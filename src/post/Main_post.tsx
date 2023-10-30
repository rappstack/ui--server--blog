import { estimate_read_time_html_, type Post, str__slug__new } from '@btakita/domain--all--blog'
import { Datetime } from '@btakita/ui--all--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import * as htmlparser2 from 'htmlparser2'
import { createMemo, For, type JSX, type ParentProps, Show } from 'solid-js'
import { Raw } from '../chidren'
import { Footnote_list } from '../citation'
import { Main } from '../main'
import { Tag } from '../tag'
export function Main_post($p:ParentProps<{
	ctx?:Ctx
	post:Post
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	return (
		<Content/>
	)
	function Content() {
		const post = $p.post
		const data = post.data
		const hero_image = data.hero_image
		const pubDate = data.pubDate
		const tags = data.tags
		const title = data.title
		const children = $p.children
		const html:any = (children as any)?.t ?? children
		const children__is_string = typeof html === 'string'
		const children__text__memo = createMemo(()=>{
			if (!children__is_string) return null
			let children__text = ''
			const parser = new htmlparser2.Parser({
				ontext(text) {
					children__text += text
				}
			})
			parser.write(html)
			parser.end()
			return children__text
		})
		const estimate_read_time_html__memo = createMemo(()=>{
			return estimate_read_time_html_(children__text__memo())
		})
		return (
			<Main
				class="Main_post"
				ctx={ctx}
				title={title}
				dataset={{
					// onbind: Main_post__onbind
				}}
			>
				<div class="Main_post__content">
					<div class="datetime_A_estimate_read_time flex opacity-80">
						<Datetime class="my-2 flex-grow" datetime={pubDate} size="lg"/>
						<div class={class_(
							`estimate_read_time mt-2 flex-grow`,
							{
								show: children__is_string && estimate_read_time_html__memo()
							}
						)}>
							<em class="estimate_read_time_val text-base italic float-right">
								<Show when={children__is_string}>
									<Raw>{estimate_read_time_html__memo()}</Raw>
								</Show>
							</em>
						</div>
					</div>
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
						<Show when={children__is_string} fallback={children}>
							<Raw>{children}</Raw>
						</Show>
						<Footnote_list ctx={ctx}/>
					</article>
					<ul class="tags-container my-8">
						<For each={tags}>{tag=>
							<Tag name={str__slug__new(tag)}/>
						}</For>
					</ul>
				</div>
			</Main>
		)
	}
}
