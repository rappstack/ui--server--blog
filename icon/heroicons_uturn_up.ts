/** @see {https://heroicons.com/} */
import { path_, svg_ } from 'relementjs/svg'
export function heroicons_uturn_up_({
	class: _class
}:{
	class?:string
}) {
	return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			fill: 'none',
			viewBox: '0 0 24 24',
			'stroke-width': 1.5,
			stroke: 'currentColor',
			class: _class,
		}, [
			path_({
				'stroke-linecap': 'round',
				'stroke-linejoin': 'round',
				d: 'm9 9 6-6m0 0 6 6m-6-6v12a6 6 0 0 1-12 0v-3'
			})
		])
	)
}
