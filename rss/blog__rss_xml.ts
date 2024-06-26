import { post_date_, post_path_prefix_, sorted_dehydrated_post_meta_a1_ } from '@rappstack/domain--any--blog/post'
import { site__description_, site__title_, site__website_ } from '@rappstack/domain--server/site'
import { doc__render, xml_doctype } from '@rappstack/ui--server/doc'
import { author_, channel_, description_, guid_, item_, link_, pubDate_, rss_, title_ } from '@rappstack/ui--server/rss'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T } from 'relysjs/server'
export function blog__rss_xml_({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	return doc__render(
		xml_doctype,
		rss_({ version: '2.0' }, [
			channel_([
				title_(site__title_(ctx)),
				description_(site__description_(ctx)),
				link_(site__website_(ctx)),
				...sorted_dehydrated_post_meta_a1_(ctx).map(dehydrated_post_meta=>
					item_([
						title_(dehydrated_post_meta.title),
						link_([
							url__join(site__website_(ctx)!, post_path_prefix_(ctx), dehydrated_post_meta.slug)
						]),
						guid_({
							isPermaLink: 'true',
						}, [
							url__join(site__website_(ctx)!, post_path_prefix_(ctx), dehydrated_post_meta.slug)
						]),
						description_(dehydrated_post_meta.description),
						pubDate_([
							post_date_(dehydrated_post_meta.pub_date)
								.toString()
								.replace(/GMT-.*/, 'GMT')
						]),
						dehydrated_post_meta.author_a1.map(author=>
							author_(author)),
					]))
			])
		])
	)
}
