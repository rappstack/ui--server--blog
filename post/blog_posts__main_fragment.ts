import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { page_dehydrated_post_meta_a1_ } from '@rappstack/domain--server--blog/page'
import { schema_org_Article_rdfa } from '@rappstack/domain--server/rdfa'
import { site__author_ } from '@rappstack/domain--server/site'
import { blog_card__li_ } from '@rappstack/ui--any--blog/card'
import { schema_org_Article_id__link_ } from '@rappstack/ui--server/rdfa'
import { type relement_env_T } from 'relementjs'
import { article_, ul_ } from 'relementjs/html'
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
			class: 'blog_posts__main_fragment',
			h1_text: site__author_(ctx) + '\'s Posts',
			description: 'The articles that I have posted to this site…'
		}, [
			article_({
				...schema_org_Article_rdfa
			},[
				schema_org_Article_id__link_(ctx),
				ul_(
					...page_dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>
						blog_card__li_({
							href: '/posts/' + post_slug__new(dehydrated_post_meta),
							dehydrated_post_meta,
						})))
			]),
		])
	)
}
