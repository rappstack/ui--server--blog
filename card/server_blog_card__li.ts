import { type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { WebPage__hasPart__push } from '@rappstack/domain--server/jsonld'
import { schema_org_CreativeWork_rdfa, type schema_org_props_rdfa_T } from '@rappstack/domain--server/rdfa'
import { request_url__pathname_ } from '@rappstack/domain--server/request'
import { site__website_ } from '@rappstack/domain--server/site'
import { blog_card__li_ } from '@rappstack/ui--any--blog/card'
import { url__join } from 'ctx-core/uri'
import { type tag_dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { type request_ctx_T } from 'relysjs/server'
import type { CreativeWork } from 'schema-dts'
export function server_blog_card__li_({
	ctx,
	href,
	li_props,
	a_props,
	...props
}:{
	ctx:request_ctx_T,
	class?:string|(()=>string)
	li_props?:Exclude<tag_props_T<HTMLLIElement>, 'class'>
	a_class?:string
	a_props?:Exclude<tag_props_T<HTMLAnchorElement>, 'class'>
	href?:string
	dehydrated_post_meta:dehydrated_post_meta_T
	show_heading?:boolean
	locale?:Intl.LocalesArgument
}, ...children:tag_dom_T[]) {
	const CreativeWork_id = url__join(site__website_(ctx)!, request_url__pathname_(ctx), `#${href}_CreativeWork`)
	WebPage__hasPart__push(ctx, { '@id': CreativeWork_id })
	return blog_card__li_({
		ctx,
		href,
		li_props: {
			...schema_org_CreativeWork_rdfa,
			resource: CreativeWork_id,
			/** @see {https://stackoverflow.com/a/46018087/142571} */
			rev: 'isPartOf',
			...li_props,
		},
		a_props: {
			...a_props,
			...<schema_org_props_rdfa_T<CreativeWork>>{
				property: 'name'
			}
		},
		...props
	}, children)
}
