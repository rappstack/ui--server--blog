import { unique_tag_a1_ } from '@rappstack/domain--any--blog/tag'
import {
	jsonld_id_ref__new,
	WebPage__description__set,
	WebPage__hasPart__push,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { schema_org_rdfa_, schema_org_rdfa_property_ } from '@rappstack/domain--server/rdfa'
import { site__title_ } from '@rappstack/domain--server/site'
import { type relement_env_T } from 'relementjs'
import { article_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article } from 'schema-dts'
import { blog__main_fragment_ } from '../main/index.js'
import { blog_tag__li_ } from './blog_tag__li.js'
export function blog_tags__main_fragment_<env_T extends relement_env_T>({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	const title = 'Tags | ' + site__title_(ctx)
	const description = 'All the tags used in posts.'
	WebPage__name__set(ctx, title)
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'CollectionPage')
	const Article_id_ref = jsonld_id_ref__new(ctx, 'Article')
	WebPage__hasPart__push(ctx, Article_id_ref)
	return [
		blog__main_fragment_<env_T>({
			ctx,
			class: 'Main_tags',
			h1_text: title,
			description
		}, [
			article_({
				...schema_org_rdfa_<Article>('Article', Article_id_ref),
			}, [
				ul_({
					...schema_org_rdfa_property_<Article>('articleBody'),
				}, ...unique_tag_a1_(ctx).map(tag=>
					blog_tag__li_({
						ctx,
						name: tag,
						size: 'lg',
					})))
			])
		])
	]
}
