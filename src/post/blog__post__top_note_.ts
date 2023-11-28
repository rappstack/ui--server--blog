import { type Node_T, type relement_env_T, type tag__dom_T } from 'relementjs'
import { em_, p_ } from 'relementjs/html'
export function blog__post__top_note_<env_T extends relement_env_T>(...children:tag__dom_T<env_T>[]) {
	return (
		p_(
			em_(...children))
	) as Node_T<env_T, HTMLElementTagNameMap['p']>
}
