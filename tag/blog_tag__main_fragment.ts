import { post__slug__new } from '@btakita/domain--any--blog'
import { tag_, tag__dehydrated_post_meta_a1_ } from '@btakita/domain--server--blog'
import { blog_card__li_ } from '@btakita/ui--any--blog/card'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_tag__main_fragment_<env_T extends relement_env_T>({
	ctx
}:{
	ctx:request_ctx_T
}) {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			class: 'Main_tag',
			title: 'Tag:' + tag_(ctx),
			description: 'All the articles with the tag "' + tag_(ctx) + '".'
		}, [
			ul_(
				...tag__dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>
					blog_card__li_({
						href: `/posts/${post__slug__new(dehydrated_post_meta)}`,
						dehydrated_post_meta,
					})))
		])
	)
}