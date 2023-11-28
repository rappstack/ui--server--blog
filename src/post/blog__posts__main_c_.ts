import { type Post, post__slug__new } from '@btakita/domain--all--blog'
import { blog__card_c_ } from '@btakita/ui--all--blog'
import { type Ctx } from 'ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { blog__main_c_ } from '../main/index.js'
export function blog__posts__main_c_<env_T extends relement_env_T>({ ctx, posts }:{
	ctx:Ctx
	posts:Post[]
}) {
	return (
		blog__main_c_<env_T>({
				ctx,
				class: 'blog__posts__main_c',
				title: 'Posts',
				description: 'The articles that I have posted to this site…'
			},
			ul_(
				...posts.map(post=>
					blog__card_c_<env_T>({
						ctx,
						href: `/posts/${post__slug__new(post)}`,
						post
					}))))
	)
}
