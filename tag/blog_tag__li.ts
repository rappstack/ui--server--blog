import { class_ } from 'ctx-core/html'
import { type relement_env_T, type tag_dom_T } from 'relementjs'
import { a_, code_, li_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
export function blog_tag__li_<env_T extends relement_env_T>({
	name,
	size
}:{
	name:string
	size?:'sm'|'lg'
}):tag_dom_T<env_T> {
	size ??= 'sm'
	return (
		li_<env_T>({
			class: class_(
				'blog__tag_c inline-block',
				size === 'sm' ? 'my-1 underline-offset-4' : 'my-3 mx-1 underline-offset-8')
		}, [
			a_({
				href: `/tags/${name.toLowerCase()}`,
				class: class_(
					'relative',
					'hover:-top-0.5',
					'focus-visible:p-1',
					'pr-2 group',
					'underline',
					'decoration-dashed',
					'hover:text-skin-accent',
					size === 'sm' ? 'text-sm' : 'text-lg')
			}, [
				svg_({
					xmlns: 'http://www.w3.org/2000/svg',
					class: class_(
						'-mr-1',
						'h-6',
						'w-6',
						'scale-95',
						'text-skin-base',
						'opacity-80',
						'group-hover:fill-skin-accent',
						size === 'sm' ? ' scale-75' : 'scale-110')
				}, [
					path_({
						d: 'M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z'
					})
				]),
				code_(`${name.toLowerCase()}`)
			])
		])
	)
}
