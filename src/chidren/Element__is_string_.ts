import { type JSX } from 'solid-js'
export function Element__is_string_(children:JSX.Element) {
  return (
		typeof children === 'string'
		|| typeof (children as any)?.t === 'string'
	)
}
