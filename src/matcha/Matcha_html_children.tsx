import { Matcha } from '@ctx-core/ui-solid'
import { type JSX, type ParentProps } from 'solid-js'
import { Element__is_string_, Raw } from '../chidren'
export function Matcha_html_children<
	E = JSX.Element
>($p:ParentProps<{
	whenthen:[any, ()=>E][]
	innerHTML?:string
	innerText?:number|string
}>) {
	const children__is_string = Element__is_string_($p.children)
	return (
		<Matcha whenthen={[
			[children__is_string, ()=><Raw>{$p.children}</Raw>],
			[$p.children, ()=>$p.children],
			[$p.innerHTML, ()=><Raw>{$p.innerHTML}</Raw>],
			[$p.innerText, ()=>$p.innerText],
			...$p.whenthen as any
		]}/>
	)
}
