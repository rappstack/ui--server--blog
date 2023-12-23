import { footnote__new } from '@btakita/domain--server--blog'
import { has_dom } from '@ctx-core/dom'
import { type Ctx_wide_T } from 'ctx-core/be'
import { fragment_, type Node_T, type relement_env_T, type tag__dom_T } from 'relementjs'
import { a_, div_, sup_ } from 'relementjs/html'
import { _footnote__handle__html_id__new, _footnote__html_id__new } from './_footnote__html_id.js'
export function footnote_c_<env_T extends relement_env_T>(
	{ ctx, id, innerHTML }:{
		ctx:Ctx_wide_T<''>
		id:string, // handle Astrojs progressive rendering
		innerHTML?:string
	},
	...children:tag__dom_T<env_T>[]
) {
	const footnote =
		footnote__new(
			ctx,
			id,
			innerHTML
				? innerHTML
				: has_dom
					? div_<'browser'>(...children).innerHTML
					: '' + fragment_<'server'>(...children))
	return (
		sup_(
			a_({
				id: _footnote__handle__html_id__new(footnote),
				href: `#${(_footnote__html_id__new(footnote))}`
			}, `[${footnote.seq}]`))
	) as Node_T<env_T, HTMLElementTagNameMap['sup']>
}
