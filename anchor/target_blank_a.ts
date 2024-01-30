import { attr_val_, class_ } from 'ctx-core/html'
import { raw_, type relement_env_T, switch_, type tag__dom_T } from 'relementjs'
import { tag_props_T } from 'relementjs/any'
import { a_ } from 'relementjs/html'
import { path_, svg_ } from 'relementjs/svg'
export function target_blank_a_<env_T extends relement_env_T>(
	$p:target_blank_a__props_T,
	...children:tag__dom_T[]
) {
	return (
		a_<env_T>({
			...$p,
			class: class_(
				'a_target_blank',
				'whitespace-nowrap',
				$p.class),
			rel: attr_val_(
				'noopener noreferrer',
				$p.rel),
			target: '_blank',
		},
		switch_<env_T>({
			...$p,
			case_aa: [
				[$p.innerHTML, ()=>raw_($p.innerHTML)],
				[$p.innerText, ()=>$p.innerText],
				[!children.length, ()=>$p.href],
			]
		}, ...children),
		svg_({
			xmlns: 'http://www.w3.org/2000/svg',
			width: 16,
			height: 16,
			fill: 'currentColor',
			class: class_(
				'bi',
				'bi-box-arrow-up-right',
				'relative',
				'top-0',
				'h-2.5',
				'w-2.5',
				'-mt-3',
				'ml-1',
				'inline-block'),
			viewBox: '0 0 16 16'
		},
		path_({
			'fill-rule': 'evenodd',
			d: 'M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'
		}),
		path_({
			'fill-rule': 'evenodd',
			d: 'M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'
		})))
	)
}
export function tb_a_<env_T extends relement_env_T>(
	$p:target_blank_a__props_T,
	...children:tag__dom_T[]
) {
	return target_blank_a_<env_T>($p, ...children)
}
export type target_blank_a__props_T = {
	href:string
	innerText?:string|number
	innerHTML?:string
	class?:string
	style?:string
	rel?:string
}&tag_props_T<HTMLAnchorElement>

