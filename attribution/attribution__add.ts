import { type root_ctx_T } from '@btakita/domain--any--blog'
import { class_ } from 'ctx-core/html'
import { type relement_env_T, switch_, type tag_dom_T } from 'relementjs'
import { span_ } from 'relementjs/html'
import { footnote__sup_ } from '../footnote/index.js'
export function attribution__add<env_T extends relement_env_T>({
	ctx,
	attribution_id,
	class: _class,
}:{
	ctx:root_ctx_T
	attribution_id:string
	class?:string
}, ...children:tag_dom_T[]) {
	return (
		footnote__sup_<env_T>({
			ctx,
			id: attribution_id
		}, [
			span_({
				class: class_('attribution', _class),
				'data-attribution_id': attribution_id
			}, [
				switch_({
					case_aa: [[true, ()=>'' as tag_dom_T<env_T>]]
				}, ...children)
			])
		])
	)
}
