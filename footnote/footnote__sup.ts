import { footnote__new } from '@rappstack/domain--server--blog/footnote'
import { is_browser_ } from 'ctx-core/env'
import { fragment_, type relement_env_T, type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { a_, div_, sup_ } from 'relementjs/html'
import { _footnote__ref__html_id__new, _footnote__html_id__new } from './_footnote__html_id.js'
type footnote__sup__props_T = {
	ctx:wide_ctx_T
	id:string, // handle Astrojs progressive rendering
	innerHTML?:string
}
export function footnote__sup_<env_T extends relement_env_T>($p:footnote__sup__props_T, ...children:tag_dom_T[]) {
	const {
		ctx,
		id,
		innerHTML
	} = $p
	const footnote = footnote__new(ctx, id,
		innerHTML
			? ' ' + innerHTML
			: is_browser_()
				? ' ' + div_<'browser'>(...children).innerHTML
				: ' ' + fragment_<'server'>(...children))
	return (
		sup_<env_T>(
			a_({
				id: _footnote__ref__html_id__new(footnote),
				href: '#' + _footnote__html_id__new(footnote),
			}, `[${footnote.seq}]`))
	)
}
