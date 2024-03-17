import { WebPage__hasPart__push } from '@rappstack/domain--server/jsonld'
import { schema_org_id_ref_, schema_org_rdfa_, schema_org_rdfa_rev_ } from '@rappstack/domain--server/rdfa'
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type tag_dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { a_, code_, li_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
import { type request_ctx_T } from 'relysjs/server'
import type { CreativeWork } from 'schema-dts'
import { tag_class } from './class.js'
export function blog_tag__li_<env_T extends relement_env_T>({
	ctx,
	name,
	size,
	li_props,
}:{
	ctx:request_ctx_T
	name:string
	size?:'sm'|'lg',
	li_props?:Exclude<tag_props_T<HTMLLIElement>, 'class'>
}, ...children:tag_dom_T[]):tag_dom_T<env_T> {
	size ??= 'sm'
	const CreativeWork_id_ref = schema_org_id_ref_(ctx, `${name}_CreativeWork`)
	WebPage__hasPart__push(ctx, CreativeWork_id_ref)
	return (
		li_<env_T>({
			class: class_(
				'blog_tag__li',
				'inline-block',
				size === 'sm'
					? [
						'my-1',
						'underline-offset-4'
					]
					: [
						'my-3',
						'mx-1',
						'underline-offset-8'
					]),
			...schema_org_rdfa_rev_<CreativeWork>('isPartOf'),
			...schema_org_rdfa_<CreativeWork>('CreativeWork', CreativeWork_id_ref),
			...li_props,
		}, [
			a_({
				href: `/tags/${name.toLowerCase()}`,
				property: 'name',
				class: class_(
					'relative',
					'hover:-top-0.5',
					'focus-visible:p-1',
					'pr-2 group',
					'underline',
					'decoration-dashed',
					'hover:text-skin-accent',
					size === 'sm' ? 'text-sm' : 'text-lg',
					tag_class)
			}, [
				svg_({
					xmlns: 'http://www.w3.org/2000/svg',
					class: class_(
						'inline-block',
						'-mr-1',
						'h-6',
						'w-6',
						'scale-95',
						'text-skin-base',
						'opacity-80',
						'group-hover:fill-skin-accent',
						'fill-skin-base',
						'group-hover:fill-skin-accent',
						size === 'sm' ? ' scale-75' : 'scale-110')
				}, [
					path_({
						d: 'M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z'
					})
				]),
				' ',
				code_(`${name.toLowerCase()}`)
			]),
			...children
		])
	)
}
