import { type root_ctx_T } from '@btakita/domain--any--blog'
import { footnote__new } from '@btakita/domain--server--blog'
import { has_dom } from '@ctx-core/dom'
import { fragment_, type relement_env_T, type tag__dom_T } from 'relementjs'
import { a_, div_, sup_ } from 'relementjs/html'
import { _footnote__handle__html_id__new, _footnote__html_id__new } from './_footnote__html_id.js'
export function footnote_c_<env_T extends relement_env_T>(
	{ ctx, id, innerHTML }:{
		ctx:root_ctx_T
		id:string, // handle Astrojs progressive rendering
		innerHTML?:string
	},
	...children:tag__dom_T[]
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
		sup_<env_T>(
			a_({
				id: _footnote__handle__html_id__new(footnote),
				href: `#${(_footnote__html_id__new(footnote))}`
			}, `[${footnote.seq}]`))
	)
}
