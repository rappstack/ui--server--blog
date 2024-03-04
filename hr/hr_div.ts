import { class_ } from 'ctx-core/html'
import { type relement_env_T } from 'relementjs'
import { div_, hr_ } from 'relementjs/html'
export function hr_div_<env_T extends relement_env_T>($p?:{
	class?:string
	aria_hidden?:boolean
}) {
	return (
		div_<env_T>({
			class: class_(
				'max-w-3xl',
				'mx-auto',
				$p?.class)
		}, [
			hr_({
				class: 'border-skin-line',
				'aria-hidden': $p?.aria_hidden
			})
		])
	)
}
