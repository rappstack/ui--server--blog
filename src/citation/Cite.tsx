import { cite } from '@btakita/domain--server--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { createMemo, type ParentProps } from 'solid-js'
import { renderToString } from 'solid-js/web'
import { _citation__handle__html_id__new, _citation__html_id__new } from './_citation__html_id.ts'
export function Cite($p:ParentProps<{
	ctx?:Ctx
	id:string, // handle Astrojs progressive rendering
	innerHTML?:string
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	const citation =
		cite(
			ctx,
			$p.id,
			$p.innerHTML || renderToString(()=>$p.children))
	return (
		<sup>
			<a
				id={(_citation__handle__html_id__new(citation))}
				href={`#${(_citation__html_id__new(citation))}`}
			>
				[{citation.id}]
			</a>
		</sup>
	)
}
