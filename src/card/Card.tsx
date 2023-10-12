import { type Post } from '@btakita/domain--all--blog'
import { style_ } from '@ctx-core/html'
import { slug } from 'github-slugger'
import { Show, type VoidProps } from 'solid-js'
import { Datetime } from '../date/Datetime.tsx'
// import { Datetime } from './Datetime.tsx'
export function Card(
	$p:VoidProps<{
		href?:string
		frontmatter:Pick<Post, 'pub_date', 'description'>
		show_heading?:boolean
		locale?:string
	}>
) {
	const href = $p.href
	const frontmatter = $p.frontmatter
	const show_heading = $p.show_heading
	const title = frontmatter.title
	const pub_date = frontmatter.pub_date
	const description = frontmatter.description
	const h_props = {
		style: style_({
			'view-transition-name': slug(title)
		}),
		class: 'text-lg font-medium decoration-dashed hover:underline',
	}
	return (
		<li class="my-6">
			<a
				href={href}
				class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
			>
				<Show when={show_heading} fallback={<h3 {...h_props}>{title}</h3>}>
					<h2 {...h_props}>{title}</h2>
				</Show>
			</a>
			<Datetime datetime={pub_date} locale={$p.locale}/>
			<p>{description}</p>
		</li>
	)
}
