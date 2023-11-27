import { type Ctx } from 'ctx-core/object'
import { type Node_T, type relement_env_T, type tag__dom_T } from 'relementjs'
import { em_, p_ } from 'relementjs/html'
export function V_post_top_note<env_T extends relement_env_T>({ ctx }:{
	ctx:Ctx
}, ...children:tag__dom_T<env_T>[]) {
	return (
		p_(
			em_(...children))
	) as Node_T<env_T, HTMLElementTagNameMap['p']>
}
