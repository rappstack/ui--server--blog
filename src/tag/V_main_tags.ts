import { type Ctx } from '@ctx-core/object'
import { H_ } from '@ctx-core/vanjs'
import type { VanShape } from 'van-type-delegate'
import { V_main } from '../main'
import { V_tag } from './V_tag.ts'
export function V_main_tags<V extends VanShape>({ ctx, tags }:{
	ctx:Ctx
	tags:string[]
}) {
	const H = H_<V>(ctx)
	return (
		V_main({
				ctx,
				class: 'Main_tags',
				title: 'Tags',
				description: 'All the tags used in posts.'
			},
			H.ul(
				...tags.map(tag=>
					V_tag<V>({ ctx, name: tag, size: 'lg' }))))
	)
}
