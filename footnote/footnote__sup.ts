import { footnote__ensure, type footnote_T } from '@rappstack/domain--server--blog/footnote'
import { md__raw_ } from '@rappstack/ui--any/md'
import { fragment_, type relement_env_T, type tag_dom_T, type wide_ctx_T } from 'relementjs'
import { a_, sup_ } from 'relementjs/html'
import { _footnote__html_id__new, _footnote__ref__html_id__new } from './_footnote__html_id.js'
const footnote__sup_M_footnote = new WeakMap<object, footnote_T>
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
	const footnote = footnote__ensure(ctx, id,
		innerHTML
			? innerHTML
			: '' + fragment_<'server'>(
			// @ts-ignore
			[children].flat(Infinity).map(child=>
				typeof child === 'string'
					? md__raw_({ ctx }, child)
					: child)))
	const sup = sup_<env_T>(
		a_({
			id: _footnote__ref__html_id__new(footnote),
			href: '#' + _footnote__html_id__new(footnote),
		}, `[${footnote.seq}]`))
	footnote__sup_M_footnote.set(sup, footnote)
	return sup
}
export function footnote__sup__sort<env_T extends relement_env_T>(..._footnote__sup_a1:tag_dom_T[]) {
	// @ts-ignore
	const footnote__sup_a1 = [_footnote__sup_a1].flat(Infinity)
	return fragment_<env_T>(footnote__sup_a1.sort((a, b)=>{
		return (footnote__sup_M_footnote.get(<object>a)?.seq ?? 0) - (footnote__sup_M_footnote.get(<object>b)?.seq ?? 0)
	}))
}
