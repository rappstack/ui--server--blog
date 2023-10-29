import { Matcha } from '@ctx-core/ui-solid'
import { type ParentProps } from 'solid-js'
import { Raw } from '../chidren'
export function Post_top_note($p:ParentProps<{
	innerHTML?:string
	innerText?:string
}>) {
  return (
		<p>
			<em>
				<Matcha whenthen={[
					[$p.children && typeof $p.children === 'string', ()=><Raw>{$p.children}</Raw>],
					[$p.children, ()=>$p.children],
					[$p.innerHTML, ()=><Raw>{$p.innerHTML}</Raw>],
					[$p.innerText, ()=>$p.innerText],
				]}/>
			</em>
		</p>
	)
}
