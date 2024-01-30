import { type Post, post__slug__new } from '@btakita/domain--any--blog'
import { blog__card_c_ } from '@btakita/ui--any--blog/card'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_tag__main_fragment_<env_T extends relement_env_T>({
	ctx,
	tag,
	posts
}:{
	ctx:request_ctx_T
	tag:string
	posts:Post[]
}) {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			class: 'Main_tag',
			title: `Tag:${tag}`,
			description: `All the articles with the tag "${tag}".`
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
