import { post_path_prefix_ } from '@rappstack/domain--any--blog/post'
import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { page_dehydrated_post_meta_a1_ } from '@rappstack/domain--server--blog/page'
import { schema_org_rdfa_property_ } from '@rappstack/domain--server/rdfa'
import { url__join } from 'ctx-core/uri'
import { ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article } from 'schema-dts'
import { server_blog_card__li_ } from '../card/index.js'
type props_T = {
	ctx:request_ctx_T
}
export function blog_posts__ul_($p:props_T) {
	let { ctx } = $p
  return (
		ul_({
			...schema_org_rdfa_property_<Article>('articleBody'),
		}, [
			...page_dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>
				server_blog_card__li_({
					ctx,
					href: url__join(post_path_prefix_(ctx), post_slug__new(dehydrated_post_meta)),
					dehydrated_post_meta,
				}))
		])
	)
}
