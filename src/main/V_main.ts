import { class_, dataset__data_attrs_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { H_, V_fragment } from '@ctx-core/vanjs'
import type { ChildDom, VanShape } from 'van-type-delegate'
import { V_breadcrumbs } from '../breadcrumb'
export function V_main<V extends VanShape>({
	ctx,
	title,
	title__class,
	description,
	dataset,
	...$p
}:{
	ctx:Ctx
	class?:string
	title?:string
	title__class?:string
	description?:string
	dataset?:Record<string, any>
}, ...children:ChildDom<V>[]) {
	const H = H_<V>(ctx)
	return V_fragment<V>({ ctx },
		V_breadcrumbs<V>({ ctx }),
		H.main({
				id: 'main',
				class: class_('Main mx-auto w-full max-w-3xl px-4 pb-12', $p.class),
				...dataset__data_attrs_(dataset || {})
			},
			title ? H.h1({ class: title__class }, title) : null,
			description ? H.p({ class: 'mb-6 mt-2 italic' }, description) : null,
			...children
		))
}
