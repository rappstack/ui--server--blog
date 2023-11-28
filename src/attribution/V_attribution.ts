import { class_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import { type relement_env_T, type tag__dom_T } from 'relementjs'
import { span_ } from 'relementjs/html'
import { V_footnote } from '../footnote/index.js'
import { V_matcha_html_children } from '../matcha/index.js'
export function V_attribution<env_T extends relement_env_T>(
	{ ctx, attribution_id, ...props }:{ ctx:Ctx, attribution_id:string, class?:string },
	...children:tag__dom_T<env_T>[]
) {
	return (
		V_footnote<env_T>({ ctx, id: attribution_id },
			span_(	{
				...props,
				class: class_('P_attribution', props.class),
				'data-attribution_id': attribution_id
			},
				V_matcha_html_children<env_T>({
					whenthen: [[true, ()=>'' as tag__dom_T<env_T>]]
				}, ...children) as tag__dom_T<env_T>))
	)
}
