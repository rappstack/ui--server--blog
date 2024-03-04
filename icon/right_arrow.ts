import { path_, svg_ } from 'relementjs/svg'
export function right_arrow_({
	class:_class
}:{
	class?:string
}) {
  return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			class: _class
		}, [
			path_({ d: 'm11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z' })
		])
	)
}
