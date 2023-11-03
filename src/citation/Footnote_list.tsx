import { footnote_o_ } from '@btakita/domain--server--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { For, Show, type VoidProps } from 'solid-js'
import { _footnote__html_id__new } from './_footnote__html_id.ts'
export function Footnote_list($p:VoidProps<{
	ctx?:Ctx
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	return (
		<Show when={footnote_o_(ctx)}>
			<For each={footnote_o_(ctx).footnote_a}>{citation=>
				<p id={_footnote__html_id__new(citation)}>
					[{citation.id}]
					:
					{' '}
					<em innerHTML={citation.html}/>
				</p>
			}</For>
		</Show>
	)
}
