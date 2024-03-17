import { Person_id_ref_, Person_image } from '@btakita/domain--server--briantakita/jsonld'
import { unique_tag_a1_ } from '@rappstack/domain--any--blog/tag'
import {
	jsonld__add,
	jsonld_id__new,
	WebPage__description__set,
	WebPage__hasPart__push,
	WebPage__headline__set,
	WebPage__name__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { request_url__href_ } from '@rappstack/domain--server/request'
import { site__title_, site__website_ } from '@rappstack/domain--server/site'
import { url__join } from 'ctx-core/uri'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article, ItemList, ListItem } from 'schema-dts'
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
	const ItemList_id_ref = jsonld__add(ctx, ()=><ItemList>{
		'@id': jsonld_id__new(ctx, 'timeline'),
		'@type': 'ItemList',
		itemListElement:
			unique_tag_a1_(ctx)
				.map(tag=>
					jsonld__add(ctx, ()=><ListItem>{
						'@id': jsonld_id__new(ctx, `${tag}_ListItem`),
						'@type': 'ListItem',
						name: tag,
						description: tag + ' tag',
						url: url__join(site__website_(ctx)!, 'tags', tag)
					})),
	})
	const Article_id_ref = jsonld__add(ctx, ()=><Article>{
		'@id': jsonld_id__new(ctx, 'Article'),
		'@type': 'Article',
		about: ItemList_id_ref,
		author: Person_id_ref_(ctx),
		headline: title,
		image: Person_image,
		name: title,
		description,
		url: request_url__href_(ctx),
		articleBody: unique_tag_a1_(ctx).join(' | '),
	})
	WebPage__hasPart__push(ctx, Article_id_ref)
	return [
		blog__main_fragment_<env_T>({
			ctx,
			class: 'Main_tags',
			h1_text: title,
			description
		}, [
			ul_(unique_tag_a1_(ctx).map(tag=>
				blog_tag__li_({
					ctx,
					name: tag,
					size: 'lg',
				})))
		])
	]
}
