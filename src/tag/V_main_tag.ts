import { H_, type Post, post__slug__new } from '@btakita/domain--all--blog'
import { V_card } from '@btakita/ui--all--blog'
import { type Ctx } from '@ctx-core/object'
import type { VanShape } from 'van-type-delegate'
import { V_main } from '../main'
export function V_main_tag<V extends VanShape>({ ctx, tag, posts }:{
	ctx:Ctx
	tag:string
	posts:Post[]
}) {
	const H = H_<V>(ctx)
	return (
		V_main({
				ctx,
				class: 'Main_tag',
				title: `Tag:${tag}`,
				description: `All the articles with the tag "${tag}".`
			},
			H.ul(
				...posts.map(post=>
					V_card<V>({
						ctx,
						href: `/posts/${post__slug__new(post)}`,
						post
					}))
			))
	)
}
