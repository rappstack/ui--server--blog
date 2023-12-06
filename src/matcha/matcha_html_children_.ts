import { raw_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { matcha_ } from './matcha_.js'
export function matcha_html_children_<env_T extends relement_env_T>(
	{ whenthen, innerHTML, innerText }:{
		whenthen?:[any, ()=>tag__dom_T<env_T>][]
		innerHTML?:string
		innerText?:number|string
	},
	...children:tag__dom_T<env_T>[]
):tag__dom_T<env_T> {
	if (children.length) return children
	if (innerHTML) return raw_<env_T>(innerHTML)
	if (innerText) return innerText
	if (whenthen) return matcha_<env_T>({ whenthen })
}
