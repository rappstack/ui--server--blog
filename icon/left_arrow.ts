import { path_, svg_ } from 'relementjs/svg'
export function left_arrow_({
	class:_class
}:{
	class?:string
}) {
  return (
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			class: _class
		}, [
			path_({ d: 'M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z' })
		])
	)
}
