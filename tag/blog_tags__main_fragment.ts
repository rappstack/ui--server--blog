import { unique_tag_a1_ } from '@rappstack/domain--any--blog/tag'
import { WebPage__description__set, WebPage__type__set } from '@rappstack/domain--server/jsonld'
import { schema_org_WebPage_id__link_ } from '@rappstack/ui--server/rdfa'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
import { blog_tag__li_ } from './blog_tag__li.js'
export function blog_tags__main_fragment_<env_T extends relement_env_T>({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	const description = 'All the tags used in posts.'
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'CollectionPage')
	return [
		schema_org_WebPage_id__link_(ctx),
		blog__main_fragment_<env_T>({
			ctx,
			class: 'Main_tags',
			h1_text: 'Tags',
			description
		}, [
			ul_(
				...unique_tag_a1_(ctx).map(tag=>
					blog_tag__li_({
						name: tag,
						size: 'lg',
					})))
		])
	]
}
