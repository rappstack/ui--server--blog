import { citation_o__memo } from '@btakita/domain--server--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { For, Show, type VoidProps } from 'solid-js'
import { _citation__html_id__new } from './_citation__html_id.ts'
export function Footnote_list($p:VoidProps<{
	ctx?:Ctx
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	return (
		<Show when={citation_o__memo(ctx)}>
			<For each={citation_o__memo(ctx).citation_a}>{citation=>
				<p id={_citation__html_id__new(citation)}>
					[{citation.id}]
					:
					{' '}
					<em innerHTML={citation.html}/>
				</p>
			}</For>
		</Show>
	)
}