import { class_ } from '@ctx-core/html'
import { type Ctx } from 'ctx-core/object'
import { type relement_env_T, type tag__dom_T } from 'relementjs'
import { span_ } from 'relementjs/html'
import { footnote_c_ } from '../footnote/index.js'
import { matcha_html_children_ } from '../matcha/index.js'
export function attribution__add<env_T extends relement_env_T>(
	{ ctx, attribution_id, ...props }:{ ctx:Ctx, attribution_id:string, class?:string },
	...children:tag__dom_T<env_T>[]
) {
	return (
		footnote_c_<env_T>({ ctx, id: attribution_id },
			span_(	{
				...props,
				class: class_('P_attribution', props.class),
				'data-attribution_id': attribution_id
			},
				matcha_html_children_<env_T>({
					whenthen: [[true, ()=>'' as tag__dom_T<env_T>]]
				}, ...children) as tag__dom_T<env_T>))
	)
}
