import { raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { V_matcha } from './V_matcha.js'
export function V_matcha_html_children<env_T extends relement_env_T>(
	{ whenthen, innerHTML, innerText }:{
		whenthen:[any, ()=>tag__dom_T<env_T>][]
		innerHTML?:string
		innerText?:number|string
	},
	...children:tag__dom_T<env_T>[]
):tag__dom_T<env_T> {
	if (children.length) {
		return children.map(child=>
			typeof child === 'string'
				? raw_<env_T>(child)
				: child) as tag__dom_T<env_T>
	}
	if (innerHTML) return raw_<env_T>(innerHTML)
	if (innerText) return innerText
	return V_matcha<env_T>({ whenthen })
}
