import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { page_dehydrated_post_meta_a1_ } from '@rappstack/domain--server--blog/page'
import { blog_card__li_ } from '@rappstack/ui--any--blog/card'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_posts__main_fragment_<env_T extends relement_env_T>({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			class: 'blog__posts__main_c',
			title: 'Posts',
			description: 'The articles that I have posted to this site…'
		}, [
			ul_(
				...page_dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>
					blog_card__li_({
						href: '/posts/' + post_slug__new(dehydrated_post_meta),
						dehydrated_post_meta,
					})))
		])
	)
}
