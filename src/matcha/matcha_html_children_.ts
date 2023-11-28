import { raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { matcha_ } from './matcha_.js'
export function matcha_html_children_<env_T extends relement_env_T>(
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
	return matcha_<env_T>({ whenthen })
}
