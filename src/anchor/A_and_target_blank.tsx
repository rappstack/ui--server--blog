/// <reference lib="dom" />
import { type JSX, type ParentProps, splitProps } from 'solid-js'
import { A_target_blank } from './A_target_blank.tsx'
export function A_and_target_blank($p:ParentProps<
	JSX.HTMLAttributes<HTMLAnchorElement>
>) {
	const [, exclude_children__$p] =
		splitProps($p, ['children'])
  return <>
		<a {...$p}/>
		<A_target_blank {...exclude_children__$p}/>
	</>
}