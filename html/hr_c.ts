import { class_ } from 'ctx-core/html'
import { type relement_env_T } from 'relementjs'
import { div_, hr_ } from 'relementjs/html'
export function hr_c_<env_T extends relement_env_T>($p?:{
	no_padding?:boolean
	aria_hidden?:boolean
}) {
	return (
		div_<env_T>({
			class: class_(
				'max-w-3xl',
				'mx-auto',
				$p?.no_padding ? 'px-0' : 'px-4')
		}, [
			hr_({
				class: 'border-skin-line',
				'aria-hidden': $p?.aria_hidden
			})
		])
	)
}
