import { type Node_T, type relement_env_T } from 'relementjs'
import { em_, p_ } from 'relementjs/html'
import { atb_ } from '../anchor/index.js'
export function repost_c_<env_T extends relement_env_T>({ href }:{ href:string }) {
	return (
		p_(
			em_('Repost from ', atb_<env_T>({ href })))
	) as Node_T<env_T, HTMLElementTagNameMap['p']>
}
