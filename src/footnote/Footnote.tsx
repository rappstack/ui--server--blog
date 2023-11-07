import { footnote } from '@btakita/domain--server--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { createMemo, type ParentProps } from 'solid-js'
import { renderToString } from 'solid-js/web'
import { _footnote__handle__html_id__new, _footnote__html_id__new } from './_footnote__html_id'
export function Footnote($p:ParentProps<{
	ctx?:Ctx
	id:string, // handle Astrojs progressive rendering
	innerHTML?:string
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const citation =
		footnote(
			ctx,
			$p.id,
			$p.innerHTML || renderToString(()=>$p.children))
	return (
		<sup>
			<a
				id={(_footnote__handle__html_id__new(citation))}
				href={`#${(_footnote__html_id__new(citation))}`}
			>
				[{citation.seq}]
			</a>
		</sup>
	)
}
