import { type Ctx } from 'ctx-core/object'
import { raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { V_matcha } from './V_matcha.js'
export function V_matcha_html_children<env_T extends relement_env_T>(
	{ ctx, whenthen, innerHTML, innerText }:{
		ctx:Ctx
		whenthen:[any, ()=>tag__dom_T<env_T>][]
		innerHTML?:string
		innerText?:number|string
	},
	...children:tag__dom_T<env_T>[]
):tag__dom_T<env_T> {
	if (children.length) {
		return children.map(child=>
			typeof child === 'string'
				? raw_<env_T>(ctx, child)
				: child) as tag__dom_T<env_T>
	}
	if (innerHTML) return raw_<env_T>(ctx, innerHTML)
	if (innerText) return innerText
	return V_matcha<env_T>({ whenthen })
}
