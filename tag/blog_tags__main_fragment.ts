import type { Article } from '@btakita/schema-dts'
import { unique_tag_a1_ } from '@rappstack/domain--any--blog/tag'
import {
	WebPage__description__set,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { schema_org_Article_rdfa, type schema_org_props_rdfa_T } from '@rappstack/domain--server/rdfa'
import { site__title_ } from '@rappstack/domain--server/site'
import { schema_org_Article__link_a1_ } from '@rappstack/ui--server/rdfa'
import { type relement_env_T } from 'relementjs'
import { article_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
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
	return [
		blog__main_fragment_<env_T>({
			ctx,
			class: 'Main_tags',
			h1_text: title,
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
