import { post_mod_a1_ } from '@rappstack/domain--any--blog/post'
import { unique_tag_a1_ } from '@rappstack/domain--any--blog/tag'
import { doc__render, xml_doctype } from '@rappstack/ui--server/doc'
import { loc_, url_, urlset_ } from '@rappstack/ui--server/sitemap'
import { url__join } from 'ctx-core/uri'
import { type request_ctx_T, request_url_ } from 'relysjs/server'
export function sitemap__xml_({
	ctx
}:{
	ctx:request_ctx_T
}) {
	const { origin } = request_url_(ctx)
	return doc__render(
		xml_doctype,
		urlset_([
			url_([
				loc_(origin)
			]),
			url_([
				loc_(url__join(origin, '/about'))
			]),
			url_([
				loc_(url__join(origin, '/open-source'))
			]),
			url_([
				loc_(url__join(origin, '/portfolio'))
			]),
			...post_mod_a1_(ctx)!.map(post_mod=>
				url_([
					loc_(url__join(origin, '/posts', post_mod.meta_(ctx).slug))
				])),
			url_([
				loc_(url__join(origin, '/posts'))
			]),
			url_([
				loc_(url__join(origin, '/tags'))
			]),
			...unique_tag_a1_(ctx).map(tag=>
			url_([
				loc_(url__join, '/tags', tag)
			]))
		])
	)
}
