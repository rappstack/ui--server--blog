import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { tag_, tag__dehydrated_post_meta_a1_ } from '@rappstack/domain--server--blog/tag'
import {
	jsonld_id_ref__new,
	WebPage__description__set,
	WebPage__hasPart__push,
	WebPage__headline__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { schema_org_rdfa_, schema_org_rdfa_property_ } from '@rappstack/domain--server/rdfa'
import { type relement_env_T } from 'relementjs'
import { article_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article } from 'schema-dts'
import { server_blog_card__li_ } from '../card/index.js'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_tag__main_fragment_<env_T extends relement_env_T>({
	ctx
}:{
	ctx:request_ctx_T
}) {
	const h1_text = 'Tag:' + tag_(ctx)
	const description = 'All the articles with the tag "' + tag_(ctx) + '".'
	WebPage__headline__set(ctx, h1_text)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'CollectionPage')
	const Article_id_ref = jsonld_id_ref__new(ctx, 'Article')
	WebPage__hasPart__push(ctx, Article_id_ref)
	return [
		blog__main_fragment_<env_T>({
			ctx,
			class: 'Main_tag',
			h1_text,
			description
		}, [
			article_({
				...schema_org_rdfa_<Article>('Article', Article_id_ref),
			}, [
				ul_({
					...schema_org_rdfa_property_<Article>('articleBody'),
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
