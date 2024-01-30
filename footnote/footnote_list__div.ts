import { type root_ctx_T } from '@btakita/domain--any--blog'
import { footnote_o_ } from '@btakita/domain--server--blog'
import { raw_, type relement_env_T } from 'relementjs'
import { div_, em_, p_ } from 'relementjs/html'
import { _footnote__html_id__new } from './_footnote__html_id.js'
export function footnote_list__div_<env_T extends relement_env_T>({
	ctx,
	class: _class,
}:{
	ctx:root_ctx_T
	class?:string
}) {
	const citation_o = footnote_o_(ctx)
	if (!citation_o) return
	return (
		div_<env_T>({ class: _class },
			...footnote_o_(ctx).footnote_a.map(footnote=>
				p_({ id: _footnote__html_id__new(footnote) }, [
					'[' + footnote.seq + ']:',
					em_(raw_(footnote.html))
				])))
	)
}
