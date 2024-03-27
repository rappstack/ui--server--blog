import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { tag_, tag__dehydrated_post_meta_a1_ } from '@rappstack/domain--server--blog/tag'
import {
	type id_ref_T,
	jsonld__add,
	jsonld_id__new,
	WebPage__description__set,
	WebPage__hasPart__push,
	WebPage__headline__set,
	WebPage__type__set
} from '@rappstack/domain--server/jsonld'
import { request_url__href_ } from '@rappstack/domain--server/request'
import { site__website_ } from '@rappstack/domain--server/site'
import { class_ } from 'ctx-core/html'
import { url__join } from 'ctx-core/uri'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article, ItemList, ListItem } from 'schema-dts'
import { server_blog_card__li_ } from '../card/index.js'
import { blog__main_fragment_ } from '../main/index.js'
type blog_tag__main_fragment_props_T = {
	ctx:request_ctx_T
	class?:string
	author_id_ref?:id_ref_T,
	image?:string
}
export function blog_tag__main_fragment_<env_T extends relement_env_T>($p:blog_tag__main_fragment_props_T) {
	const {
		ctx,
		author_id_ref,
		image,
	} = $p
	const title = 'Tag:' + tag_(ctx)
	const description = 'All the articles with the tag "' + tag_(ctx) + '".'
	WebPage__headline__set(ctx, title)
	WebPage__description__set(ctx, description)
	WebPage__type__set(ctx, 'CollectionPage')
	const ItemList_id_ref = jsonld__add(ctx, ()=><ItemList>{
		'@id': jsonld_id__new(ctx, 'timeline'),
		'@type': 'ItemList',
		itemListElement: tag__dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>{
			const post_slug = post_slug__new(dehydrated_post_meta)
			return jsonld__add(ctx, ()=><ListItem>{
				'@id': jsonld_id__new(ctx, `${post_slug}_ListItem`),
				'@type': 'ListItem',
				name: dehydrated_post_meta.title,
				description: dehydrated_post_meta.description,
				url: url__join(site__website_(ctx)!, 'posts', post_slug)
			})
		}),
	})
	const Article_id_ref = jsonld__add(ctx, ()=><Article>{
		'@id': jsonld_id__new(ctx, 'Article'),
		'@type': 'Article',
		about: ItemList_id_ref,
		author: author_id_ref,
		headline: title,
		image,
		name: title,
		description,
		url: request_url__href_(ctx),
		articleBody:
			tag__dehydrated_post_meta_a1_(ctx)
				.map(dehydrated_post_meta=>
					`${dehydrated_post_meta.title}: ${dehydrated_post_meta.description ?? '—'}`)
				.join('\n'),
	})
	WebPage__hasPart__push(ctx, Article_id_ref)
	return [
		blog__main_fragment_<env_T>({
			ctx,
			class: class_(
				'Main_tag',
				$p.class),
			h1_text: title,
			hero_p_text: description
		}, [
			ul_(tag__dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>
				server_blog_card__li_({
					ctx,
					href: `/posts/${post_slug__new(dehydrated_post_meta)}`,
					dehydrated_post_meta,
				})))
		])
	]
}
