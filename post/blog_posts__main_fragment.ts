import { post_path_prefix_ } from '@rappstack/domain--any--blog/post'
import { post_slug__new } from '@rappstack/domain--any--blog/slug'
import { page_dehydrated_post_meta_a1_ } from '@rappstack/domain--server--blog/page'
import { jsonld__add, jsonld_id__new, jsonld_id_ref_, WebPage__hasPart__push } from '@rappstack/domain--server/jsonld'
import { schema_org_rdfa_ } from '@rappstack/domain--server/rdfa'
import { request_url__href_ } from '@rappstack/domain--server/request'
import { site__author_a1_, site__website_ } from '@rappstack/domain--server/site'
import { class_ } from 'ctx-core/html'
import { url__join } from 'ctx-core/uri'
import { type relement_env_T, type tag_dom_T } from 'relementjs'
import type { tag_props_T } from 'relementjs/any'
import { article_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article, ItemList, ListItem } from 'schema-dts'
import { blog__main_fragment_ } from '../main/index.js'
type blog_posts__main_fragment_config_T = {
	ctx:request_ctx_T
	class?:string
	image?:string
	main__hyop?:string
	hero_class?:string
	h1_text?:string
	h1_class?:string
	description?:string
	description_html?:string
	description_class?:string
	li_class?:string
	li_props?:Exclude<tag_props_T<HTMLLIElement>, 'class'>
}
export function blog_posts__main_fragment_<env_T extends relement_env_T>(
	$p:blog_posts__main_fragment_config_T,
	...children:tag_dom_T[]
) {
	let {
		ctx,
		class: _class,
		image,
		main__hyop,
		hero_class,
		h1_text,
		h1_class,
		description,
		description_html,
		description_class,
	} = $p
	h1_text ??= site__author_a1_(ctx)![0].name + '\'s Posts'
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
				url: url__join(site__website_(ctx)!, post_path_prefix_(ctx), post_slug)
			})
		}),
	})
	const Article_id_ref = jsonld__add(ctx, ()=><Article>{
		'@id': jsonld_id__new(ctx, 'Article'),
		'@type': 'Article',
		about: ItemList_id_ref,
		author: site__author_a1_(ctx)!.map(author=>jsonld_id_ref_(author)),
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
			class: class_(
				'blog_posts__main_fragment',
				_class),
			hyop: main__hyop,
			hero_class,
			h1_text,
			h1_class,
			hero_p_text: description,
			hero_p_html: description_html,
			hero_p_class: description_class,
		}, [
			article_({
				...schema_org_rdfa_<Article>('Article', Article_id_ref),
			}, children),
		])
	)
}
