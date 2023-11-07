import { class_ } from '@ctx-core/html'
import { type Ctx } from '@ctx-core/object'
import { type JSX, type ParentProps } from 'solid-js'
import { Footnote } from '../footnote'
import { Matcha_html_children } from '../matcha'
export function Attribution($p:ParentProps<
	JSX.HTMLElementTags['p']
	&{ ctx:Ctx, attribution_id:string }
>) {
  return (
		<Footnote id={$p.attribution_id} ctx={$p.ctx}>
			<p
				{...$p}
				class={class_('P_attribution', $p.class)}
				data-attribution_id={$p.attribution_id}
			>
				<Matcha_html_children whenthen={[
					[true, ()=>'']
				]}/>
			</p>
		</Footnote>
	)
}
