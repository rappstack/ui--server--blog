import { type Ctx } from 'ctx-core/object'
import { type Node_T, type relement_env_T } from 'relementjs'
import { div_, hr_ } from 'relementjs/html'
export function V_hr<env_T extends relement_env_T>($p:{
	ctx:Ctx
	'no-padding'?:boolean
	'aria-hidden'?:boolean
}) {
	const { ctx } = $p
	return (
		div_({ class: `max-w-3xl mx-auto ${$p['no-padding'] ? 'px-0' : 'px-4'}` },
			hr_({
				class: 'border-skin-line',
				'aria-hidden': $p['aria-hidden']
			}))
	) as Node_T<env_T, HTMLElementTagNameMap['div']>
}
