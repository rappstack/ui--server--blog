import { type ParentProps } from 'solid-js'
import { Matcha_html_children } from '../matcha'
export function Post_top_note($p:ParentProps<{
	innerHTML?:string
	innerText?:string
}>) {
  return (
		<p>
			<em>
				<Matcha_html_children whenthen={[
					[true, ()=>'']
				]}/>
			</em>
		</p>
	)
}
