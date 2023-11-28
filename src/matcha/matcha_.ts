import { type relement_env_T, type tag__dom_T } from 'relementjs'
export function matcha_<env_T extends relement_env_T>({ whenthen }:{
	whenthen:[any, ()=>tag__dom_T<env_T>][]
}, ...children:tag__dom_T<env_T>[]) {
	for (let i = 0; i < whenthen.length; i++) {
		const a = whenthen[i]
		if (a[0]) return a[1]()
	}
	return children
}
