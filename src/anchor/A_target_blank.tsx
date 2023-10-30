/// <reference lib="dom" />
import { class_ } from '@ctx-core/html'
import { type JSX, type ParentProps } from 'solid-js'
import { Matcha_html_children } from '../matcha'
import './A_target_blank.css'
export function A_target_blank($p:ParentProps<JSX.HTMLElementTags['a']>) {
	return (
		<a
			{...$p}
			class={class_('A_target_blank', $p.class)}
			rel={`noopener noreferrer` + $p.rel ? ` ${$p.rel}` : ''}
			target="_blank"
		>
			<Matcha_html_children {...$p} whenthen={[
				[true, ()=>$p.href]
			]}/>
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
				class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
				<path fill-rule="evenodd"
					d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
				<path fill-rule="evenodd"
					d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
			</svg>
		</a>
	)
}
export const Atb = A_target_blank
