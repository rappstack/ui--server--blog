import type { Article } from '@btakita/schema-dts'
import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { tag_, tag__dehydrated_post_meta_a1_ } from '@rappstack/domain--server--blog/tag'
import { WebPage__description__set, WebPage__type__set } from '@rappstack/domain--server/jsonld'
import { schema_org_Article_rdfa, type schema_org_props_rdfa_T } from '@rappstack/domain--server/rdfa'
import { schema_org_Article__link_a1_, schema_org_WebPage__link_a1_ } from '@rappstack/ui--server/rdfa'
import { type relement_env_T } from 'relementjs'
import { article_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { server_blog_card__li_ } from '../card/index.js'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_tag__main_fragment_<env_T extends relement_env_T>({
	ctx
}:{
	ctx:request_ctx_T
}) {
	const description = 'All the articles with the tag "' + tag_(ctx) + '".'
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'CollectionPage')
	return [
		schema_org_WebPage__link_a1_(ctx),
		blog__main_fragment_<env_T>({
			ctx,
			class: 'Main_tag',
			h1_text: 'Tag:' + tag_(ctx),
			description
		}, [
			article_({
				...schema_org_Article_rdfa,
			}, [
				schema_org_Article__link_a1_(ctx),
				ul_({
					...<schema_org_props_rdfa_T<Article>>{
						property: 'articleBody'
					}
				}, ...tag__dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>
					server_blog_card__li_({
						ctx,
						href: `/posts/${post_slug__new(dehydrated_post_meta)}`,
						dehydrated_post_meta,
					})))
			])
		])
	]
}
