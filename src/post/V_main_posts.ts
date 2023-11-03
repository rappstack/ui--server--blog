import { H_, type Post, post__slug__new } from '@btakita/domain--all--blog'
import { V_card } from '@btakita/ui--all--blog'
import { type Ctx } from '@ctx-core/object'
import type { PlateVan } from 'van-type-delegate'
import { V_main } from '../main'
export function V_main_posts<V extends PlateVan>({ ctx, posts }:{
	ctx:Ctx
	posts:Post[]
}) {
	const H = H_<V>(ctx)
	return (
		V_main<V>({
				ctx,
				class: 'Main_posts',
				title: 'Posts',
				description: 'The articles that I have posted to this site…'
			},
			H.ul(
				...posts.map(post=>
					V_card<V>({
						ctx,
						href: `/posts/${post__slug__new(post)}`,
						post
					}))))
	)
}
