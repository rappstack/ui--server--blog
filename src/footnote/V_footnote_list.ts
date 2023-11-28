import { footnote_o_ } from '@btakita/domain--server--blog'
import { type Ctx } from 'ctx-core/be'
import { type Node_T, raw_, type relement_env_T } from 'relementjs'
import { div_, em_, p_ } from 'relementjs/html'
import { _footnote__html_id__new } from './_footnote__html_id.js'
export function V_footnote_list<env_T extends relement_env_T>({ ctx, ...$p }:{
	ctx:Ctx
	class?:string
}) {
	const citation_o = footnote_o_(ctx)
	if (!citation_o) return
	return (
		div_({ class: $p.class },
			...footnote_o_(ctx).footnote_a.map(footnote=>
				p_({ id: _footnote__html_id__new(footnote) },
					`[${footnote.seq}]: `,
					em_(raw_(footnote.html)))))
	) as Node_T<env_T, HTMLElementTagNameMap['div']>
}
