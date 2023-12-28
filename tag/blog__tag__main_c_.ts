import { type Post, post__slug__new } from '@btakita/domain--any--blog'
import { blog__card_c_ } from '@btakita/ui--any--blog/card'
import { type Ctx_wide_T } from 'ctx-core/be'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { blog__main_c_ } from '../main/index.js'
export function blog__tag__main_c_<env_T extends relement_env_T>({ ctx, tag, posts }:{
	ctx:Ctx_wide_T<''>
	tag:string
	posts:Post[]
}) {
	return (
		blog__main_c_<env_T>({
			ctx,
			class: 'Main_tag',
			title: `Tag:${tag}`,
			description: `All the articles with the tag "${tag}".`
		},
		ul_(
			...posts.map(post=>
				blog__card_c_<env_T>({
					href: `/posts/${post__slug__new(post)}`,
					post
				}))))
	)
}
