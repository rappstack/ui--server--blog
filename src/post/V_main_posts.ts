import { type Post, post__slug__new } from '@btakita/domain--all--blog'
import { V_card } from '@btakita/ui--all--blog'
import { type Ctx } from 'ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { V_main } from '../main/index.js'
export function V_main_posts<env_T extends relement_env_T>({ ctx, posts }:{
	ctx:Ctx
	posts:Post[]
}) {
	return (
		V_main<env_T>({
				ctx,
				class: 'Main_posts',
				title: 'Posts',
				description: 'The articles that I have posted to this site…'
			},
			ul_(
				...posts.map(post=>
					V_card<env_T>({
						ctx,
						href: `/posts/${post__slug__new(post)}`,
						post
					}))))
	)
}
