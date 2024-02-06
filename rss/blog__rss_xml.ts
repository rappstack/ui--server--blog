import { post_date_, sorted_dehydrated_post_meta_a1_ } from '@rappstack/domain--any--blog'
import { site__description_, site__title_, site__website_ } from '@rappstack/domain--server--blog'
import { url__join } from 'ctx-core/uri'
import { fragment_, raw_, type tag_dom_T } from 'relementjs'
import { type tag_props_val_T, tagsNS } from 'relementjs/server'
import { type request_ctx_T } from 'relysjs/server'
const R = tagsNS<'any'>('http://backend.userland.com/rss2')
const rss_ = rss_tag_('rss')
const channel_ = rss_tag_('channel')
const title_ = rss_tag_('title')
const description_ = rss_tag_('description')
const link_ = rss_tag_('link')
const item_ = rss_tag_('item')
const guid_ = rss_tag_('guid')
const pubDate_ = rss_tag_('pubDate')
const author_ = rss_tag_('author')
export function blog__rss_xml_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	return '' + fragment_([
		raw_('<?xml version="1.0" encoding="UTF-8"?>'),
		rss_({ version: '2.0' }, [
			channel_([
				title_(site__title_(ctx)),
				description_(site__description_(ctx)),
				link_(site__website_(ctx)),
				...sorted_dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>
					item_([
						title_(dehydrated_post_meta.title),
						link_([
							url__join(site__website_(ctx)!, 'posts', dehydrated_post_meta.slug)
						]),
						guid_({
							isPermaLink: 'true',
						}, [
							url__join(site__website_(ctx)!, 'posts', dehydrated_post_meta.slug)
						]),
						description_(dehydrated_post_meta.description),
						pubDate_([
							post_date_(dehydrated_post_meta.pub_date)
								.toString()
								.replace(/GMT-.*/, 'GMT')
						]),
						author_(dehydrated_post_meta.author),
					]))
			])
		])
	])
}
function rss_tag_(tag_name:string) {
	return (
		props?:Record<string, tag_props_val_T>|tag_dom_T,
		...children:tag_dom_T[]
	)=>R[tag_name](props, ...children)
}
