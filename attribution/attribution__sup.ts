import { type root_ctx_T } from '@rappstack/domain--any--blog'
import { class_ } from 'ctx-core/html'
import { type relement_env_T, type tag_dom_T } from 'relementjs'
import { span_ } from 'relementjs/html'
import { footnote__sup_ } from '../footnote/index.js'
export function attribution__sup_<env_T extends relement_env_T>({
	ctx,
	footnote_id,
	class: _class,
}:{
	ctx:root_ctx_T
	footnote_id:string
	class?:string
}, ...children:tag_dom_T[]) {
	return (
		footnote__sup_<env_T>({
			ctx,
			id: footnote_id
		}, [
			span_({
				class: class_('attribution', _class),
				'data-attribution_id': footnote_id
			}, ...children)
		])
	)
}
