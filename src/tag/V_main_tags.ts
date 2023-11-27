import { type Ctx } from 'ctx-core/object'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { V_main } from '../main/index.js'
import { V_tag } from './V_tag.js'
export function V_main_tags<env_T extends relement_env_T>({ ctx, tags }:{
	ctx:Ctx
	tags:string[]
}) {
	return (
		V_main<env_T>({
				ctx,
				class: 'Main_tags',
				title: 'Tags',
				description: 'All the tags used in posts.'
			},
			ul_(
				...tags.map(tag=>
					V_tag<env_T>({ ctx, name: tag, size: 'lg' }))))
	)
}
