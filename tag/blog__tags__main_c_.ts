import { type Ctx_wide_T } from 'ctx-core/be'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { blog__main_c_ } from '../main/index.js'
import { blog__tag_c_ } from './blog__tag_c_.js'
export function blog__tags__main_c_<env_T extends relement_env_T>({ ctx, tags }:{
	ctx:Ctx_wide_T<''>
	tags:string[]
}) {
	return (
		blog__main_c_<env_T>({
			ctx,
			class: 'Main_tags',
			title: 'Tags',
			description: 'All the tags used in posts.'
		}, [
			ul_(
				...tags.map(tag=>
					blog__tag_c_<env_T>({ name: tag, size: 'lg' })))
		])
	)
}
