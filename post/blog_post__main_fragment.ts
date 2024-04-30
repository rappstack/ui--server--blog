import { slug__new } from '@rappstack/domain--any--blog/slug'
import {
	blog_post__author_a1_,
	blog_post__canonical_url_,
	blog_post__description_,
	blog_post__description_html_,
	blog_post__hero_image_,
	blog_post__subtitle_,
	blog_post__tag_a1_,
	blog_post__title_,
	blog_post_mod__meta_
} from '@rappstack/domain--server--blog/post'
import { jsonld__add, jsonld_id__new, WebPage__hasPart__push, WebPage_id_ref_ } from '@rappstack/domain--server/jsonld'
import { request_url__href_ } from '@rappstack/domain--server/request'
import { blog_author_date_reading_time__div_ } from '@rappstack/ui--any--blog/card'
import { class_ } from 'ctx-core/html'
import { raw_, type tag_dom_T } from 'relementjs'
import { article_, div_, h1_, img_, span_, template_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import type { Article } from 'schema-dts'
import { footnote_list__div_ } from '../footnote/index.js'
import { heroicons_clipboard_document_list_ } from '../icon/index.js'
import { blog__main_fragment_ } from '../main/index.js'
import { repost__p_ } from '../repost/index.js'
import { blog_tag__li_ } from '../tag/index.js'
import { blog_post__html_, blog_post__text_ } from './blog_post__html.js'
type blog_post__main_fragment_props_T = {
	ctx:request_ctx_T
	class?:string
	progress_container_class?:string
	progress_class?:string
	article_class?:string
	breadcrumbs__nav_class?:string
	image?:string
	h1_dom?:tag_dom_T
	h1_class?:string
	subtitle_class?:string
	description_class?:string
}
export function blog_post__main_fragment_($p:blog_post__main_fragment_props_T) {
	const {
		ctx,
		progress_container_class,
		progress_class,
		article_class,
		breadcrumbs__nav_class,
		image,
		h1_class,
		subtitle_class,
		description_class,
	} = $p
	let { h1_dom } = $p
	const title = blog_post__title_(ctx)
	const subtitle = blog_post__subtitle_(ctx)
	const description = blog_post__description_(ctx)
	const description_html = blog_post__description_html_(ctx)
	h1_dom ??=
		subtitle
			? [
				h1_({
					class: class_(
						'inline',
						h1_class)
				}, title),
				span_({ class: subtitle_class }, ': ' + subtitle)
			]
			: null
	return [
		blog__main_fragment_<'server'>({
			ctx,
			class: class_(
				'blog_post__main',
				'mb-0',
				$p.class),
			h1_dom,
			h1_text: title,
			h1_class,
			tween__dom: [
				blog_author_date_reading_time__div_({
					dehydrated_post_meta: blog_post_mod__meta_(ctx)!,
					class: class_('mb-6')
				})
			],
			hero_p_class: description_class,
			hero_p_html: description_html,
			hero_p_text: description,
			breadcrumbs__nav_class,
			/** @see {import('@rappstack/ui--browser--blog/post').code_copy_button__hyop} */
			hyop: 'code_copy_button__hyop'
		}, [
			blog_post__main__article_(),
			ul_({
				class: class_(
					'tag_a1-container',
					'my-8')
			}, ...(blog_post__tag_a1_(ctx) ?? []).map(tag=>
				blog_tag__li_({ ctx, name: slug__new(tag) })))
		]),
		div_({
			class: class_(
				'progress-container',
				'fixed',
				'top-0',
				'z-50',
				'h-1',
				'w-full',
				progress_container_class),
		}, [
			div_({
				class: class_(
					'progress-bar',
					'h-1',
					'w-0',
					progress_class),
				/** @see {import('@rappstack/ui--browser--blog/post').progress_bar__hyop} */
				hyop: 'progress_bar__hyop'
			})
		]),
		template_({
			id: 'code_copy_icon__template',
			class: class_('hidden'),
			/** @see {import('@rappstack/ui--browser--blog/post').code_copy_icon__template__hyop} */
			hyop: 'code_copy_icon__template__hyop'
		}, heroicons_clipboard_document_list_({
			class: class_(
				'h-6',
				'w-6')
		})),
	]
	function blog_post__main__article_() {
		const Article_id_ref = jsonld__add(ctx, ()=><Article>{
			'@id': jsonld_id__new(ctx, 'Article'),
			'@type': 'Article',
			about: WebPage_id_ref_(ctx),
			author: blog_post__author_a1_(ctx),
			headline: title,
			image,
			name: title,
			description,
			url: request_url__href_(ctx),
			articleBody: blog_post__text_(ctx),
		})
		WebPage__hasPart__push(ctx, Article_id_ref)
		return (
			article_({
				id: 'article',
				role: 'article',
				class: class_(
					'prose',
					'mt-8',
					'mx-auto',
					'max-w-3xl',
					article_class),
			}, [
				div_([
					blog_post__hero_image_(ctx)
					&& div_({
						class: 'hero-image'
					}, [
						img_({
							width: 1020,
							height: 510,
							src: blog_post__hero_image_(ctx),
							alt: title,
							class: 'border-none'
						})
					]),
					blog_post__canonical_url_(ctx)
					&& repost__p_({
						href: blog_post__canonical_url_(ctx)!
					}),
					raw_(blog_post__html_(ctx)),
					footnote_list__div_({ ctx })
				]),
			])
		)
	}
}
