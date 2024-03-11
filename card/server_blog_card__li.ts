import type { CreativeWork } from '@btakita/schema-dts'
import { type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { Article_id_, schema_org_CreativeWork_rdfa } from '@rappstack/domain--server/rdfa'
import { request_url__pathname_ } from '@rappstack/domain--server/request'
import { site__website_ } from '@rappstack/domain--server/site'
import { blog_card__li_ } from '@rappstack/ui--any--blog/card'
import { schema_org_rdfa__link_ } from '@rappstack/ui--server/rdfa'
import { url__join } from 'ctx-core/uri'
import { type tag_dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { type request_ctx_T } from 'relysjs/server'
export function server_blog_card__li_({
	ctx,
	href,
	li_props,
	...props
}:{
	ctx:request_ctx_T,
	class?:string|(()=>string)
	li_props?:Exclude<tag_props_T<HTMLLIElement>, 'class'>
	href?:string
	dehydrated_post_meta:dehydrated_post_meta_T
	show_heading?:boolean
	locale?:Intl.LocalesArgument
}, ...children:tag_dom_T[]) {
  return blog_card__li_({
		ctx,
		href,
		li_props: {
			...schema_org_CreativeWork_rdfa,
			...li_props,
		},
		...props
	}, [
		schema_org_rdfa__link_<CreativeWork>({
			property: '@id',
			href: url__join(site__website_(ctx)!, request_url__pathname_(ctx), `#${href}_CreativeWork`)
		}),
		schema_org_rdfa__link_<CreativeWork>({
			property: 'about',
			href: Article_id_(ctx)
		}),
	])
}
