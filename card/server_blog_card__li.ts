import { type dehydrated_post_meta_T } from '@rappstack/domain--any--blog/post'
import { jsonld_id_ref__new, WebPage__hasPart__push } from '@rappstack/domain--server/jsonld'
import { schema_org_rdfa_, schema_org_rdfa_property_, schema_org_rdfa_rev_ } from '@rappstack/domain--server/rdfa'
import { blog_card__li_ } from '@rappstack/ui--any--blog/card'
import { type tag_dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { type request_ctx_T } from 'relysjs/server'
import type { CreativeWork } from 'schema-dts'
type server_blog_card__li_props_T = {
	ctx:request_ctx_T
	class?:string|(()=>string)
	li_props?:Exclude<tag_props_T<HTMLLIElement>, 'class'>
	a_class?:string
	a_props?:Exclude<tag_props_T<HTMLAnchorElement>, 'class'>
	h2_class?:string
	h2_props?:Exclude<tag_props_T<HTMLAnchorElement>, 'class'>
	href?:string
	dehydrated_post_meta:dehydrated_post_meta_T
	show_heading?:boolean
	locale?:Intl.LocalesArgument
}
export function server_blog_card__li_($p:server_blog_card__li_props_T, ...children:tag_dom_T[]) {
	const {
		ctx,
		href,
		li_props,
		a_props,
		...props
	} = $p
	const CreativeWork_id_ref = jsonld_id_ref__new(ctx, `${href}_CreativeWork`)
	WebPage__hasPart__push(ctx, CreativeWork_id_ref)
	return blog_card__li_({
		ctx,
		href,
		li_props: {
			...schema_org_rdfa_rev_<CreativeWork>('isPartOf'),
			...schema_org_rdfa_<CreativeWork>('CreativeWork', CreativeWork_id_ref),
			...li_props,
		},
		a_props: {
			...a_props,
			...schema_org_rdfa_property_<CreativeWork>('name'),
		},
		...props
	}, children)
}
