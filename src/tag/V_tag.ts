import { H_, S_ } from '@btakita/domain--all--blog'
import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import type { ChildDom, VanShape } from 'van-type-delegate'
import './Tag.css'
export function V_tag<V extends VanShape>({ ctx, name, ...$p }:{
	ctx:Ctx
	name:string
	size?:'sm'|'lg'
}):ChildDom<V> {
	const size = $p.size || 'sm'
	const H = H_<V>(ctx)
	const S = S_<V>(ctx)
	return (
		H.li({
				class: class_(
					'Tag inline-block',
					size === 'sm' ? 'my-1 underline-offset-4' : 'my-3 mx-1 underline-offset-8')
			},
			H.a({
					href: `/tags/${name.toLowerCase()}`,
					class: class_(
						size === 'sm' ? 'text-sm' : 'text-lg',
						'pr-2 group')
				},
				S.svg({
						xmlns: 'http://www.w3.org/2000/svg',
						class: size === 'sm' ? ' scale-75' : 'scale-110'
					},
					S.path({
						d: 'M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z'
					})),
				H.code(`${name.toLowerCase()}`)))
	)
}
