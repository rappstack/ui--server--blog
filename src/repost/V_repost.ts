import { type Ctx } from 'ctx-core/object'
import { type Node_T, type relement_env_T } from 'relementjs'
import { em_, p_ } from 'relementjs/html'
import { V_atb } from '../anchor/index.js'
export function V_repost<env_T extends relement_env_T>({ ctx, href }:{ ctx:Ctx, href:string }) {
	return (
		p_(
			em_('Repost from ', V_atb<env_T>({ ctx, href })))
	) as Node_T<env_T, HTMLElementTagNameMap['p']>
}
