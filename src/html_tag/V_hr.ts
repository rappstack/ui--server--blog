import { type Ctx } from '@ctx-core/object'
import { H_ } from '@ctx-core/vanjs'
import type { VanShape } from 'van-type-delegate'
export function V_hr<V extends VanShape>($p:{
	ctx:Ctx
	'no-padding'?:boolean
	'aria-hidden'?:boolean
}) {
	const { ctx } = $p
	const H = H_<V>(ctx)
	return (
		H.div({ class: `max-w-3xl mx-auto ${$p['no-padding'] ? 'px-0' : 'px-4'}` },
			H.hr({
				class: 'border-skin-line',
				'aria-hidden': $p['aria-hidden']
			})))
}
