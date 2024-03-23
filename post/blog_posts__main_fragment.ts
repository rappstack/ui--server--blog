import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { page_dehydrated_post_meta_a1_ } from '@rappstack/domain--server--blog/page'
import { type id_ref_T, jsonld__add, jsonld_id__new, WebPage__hasPart__push } from '@rappstack/domain--server/jsonld'
import { schema_org_rdfa_, schema_org_rdfa_property_ } from '@rappstack/domain--server/rdfa'
import { request_url__href_ } from '@rappstack/domain--server/request'
import { site__author_, site__website_ } from '@rappstack/domain--server/site'
import { url__join } from 'ctx-core/uri'
import { type relement_env_T } from 'relementjs'
import { article_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article, ItemList, ListItem } from 'schema-dts'
import { server_blog_card__li_ } from '../card/index.js'
import { blog__main_fragment_ } from '../main/index.js'
export function blog_posts__main_fragment_<env_T extends relement_env_T>({
	ctx,
	author_id_ref,
	image,
	posts_path,
	h1_text,
	h1_class,
	description,
}:{
	ctx:request_ctx_T
	author_id_ref:id_ref_T
	image:string
	posts_path?:string
	h1_text?:string
	h1_class?:string
	description?:string
}) {
	posts_path ??= 'posts'
	h1_text ??= site__author_(ctx) + '\'s Posts'
	const ItemList_id_ref = jsonld__add(ctx, ()=><ItemList>{
		'@id': jsonld_id__new(ctx, 'timeline'),
		'@type': 'ItemList',
		itemListElement: page_dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>{
			const post_slug = post_slug__new(dehydrated_post_meta)
			return jsonld__add(ctx, ()=><ListItem>{
				'@id': jsonld_id__new(ctx, `${post_slug}_ListItem`),
				'@type': 'ListItem',
				name: dehydrated_post_meta.title,
				description: dehydrated_post_meta.description,
				url: url__join(site__website_(ctx)!, posts_path, post_slug)
			})
		}),
	})
	const Article_id_ref = jsonld__add(ctx, ()=><Article>{
		'@id': jsonld_id__new(ctx, 'Article'),
		'@type': 'Article',
		about: ItemList_id_ref,
		author: author_id_ref,
		headline: h1_text,
		image,
		name: h1_text,
		description,
		url: request_url__href_(ctx),
		articleBody:
			page_dehydrated_post_meta_a1_(ctx)
				.map(dehydrated_post_meta=>
					`${dehydrated_post_meta.title}: ${dehydrated_post_meta.description ?? '—'}`)
				.join('\n'),
	})
	WebPage__hasPart__push(ctx, Article_id_ref)
	return (
		blog__main_fragment_<env_T>({
			ctx,
			class: 'blog_posts__main_fragment',
			h1_text,
			h1_class,
			description,
		}, [
			article_({
				...schema_org_rdfa_<Article>('Article', Article_id_ref),
			}, [
				ul_({
					...schema_org_rdfa_property_<Article>('articleBody'),
				}, [
					...page_dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>
						server_blog_card__li_({
							ctx,
							href: url__join(posts_path, post_slug__new(dehydrated_post_meta)),
							dehydrated_post_meta,
						}))
				])
			]),
		])
	)
}
