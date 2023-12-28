import { type Node_T, type relement_env_T } from 'relementjs'
import { div_, hr_ } from 'relementjs/html'
export function hr_c_<env_T extends relement_env_T>($p:{
	'no-padding'?:boolean
	'aria-hidden'?:boolean
} = {}) {
	return (
		div_({ class: `max-w-3xl mx-auto ${$p['no-padding'] ? 'px-0' : 'px-4'}` },
			hr_({
				class: 'border-skin-line',
				'aria-hidden': $p['aria-hidden']
			}))
	) as Node_T<env_T, HTMLElementTagNameMap['div']>
}
