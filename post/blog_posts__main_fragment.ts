import { type Post, post__slug__new } from '@btakita/domain--any--blog'
import { blog__card_c_ } from '@btakita/ui--any--blog/card'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_posts__main_fragment_<env_T extends relement_env_T>({
	ctx,
	posts
}:{
	ctx:request_ctx_T
	posts:Post[]
}) {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			class: 'blog__posts__main_c',
			title: 'Posts',
			description: 'The articles that I have posted to this site…'
		}, [
			ul_(
				...posts.map(post=>
					blog__card_c_<env_T>({
						href: `/posts/${post__slug__new(post)}`,
						post
					})))
		])
	)
}
