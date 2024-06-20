import { footnote_o_ } from '@rappstack/domain--server--blog/footnote'
import { class_ } from 'ctx-core/html'
import { raw_, type relement_env_T, type wide_ctx_T } from 'relementjs'
import { a_, dd_, dl_, dt_, p_ } from 'relementjs/html'
import { heroicons_uturn_up_ } from '../icon/index.js'
import { _footnote__html_id__new, _footnote__ref__html_id__new } from './_footnote__html_id.js'
type props_T = {
	ctx:wide_ctx_T
	class?:string
}
export function footnote_list__div_<env_T extends relement_env_T>($p:props_T) {
	const { ctx } = $p
	const footnote_o = footnote_o_(ctx)
	if (!footnote_o) return
	return (
		dl_<env_T>({
			class: class_(
				'grid',
				'grid-cols-[3em_1fr]',
				$p.class,
			),
		}, [
			...footnote_o.footnote_a.map(footnote=>[
				dt_({
					id: _footnote__html_id__new(footnote),
					class: class_(
						'mt-0',
						'mr-2',),
				}, [
					p_({
						class: 'inline',
					}, [
						a_({
							href: '#' + _footnote__ref__html_id__new(footnote),
							class: class_(
								'inline-block',
								'relative',
								'ml-auto'),
							/** @see {import('@rappstack/ui--browser--blog/footnote').footnote_list__div__a__hyop} */
							hyop: 'footnote_list__div__a__hyop'
						}, [
							heroicons_uturn_up_({
								class: class_(
									'h-3',
									'w-3')
							})
						]),
						'[' + footnote.seq + ']:',
					]),
				]),
				dd_({
					class: class_(
						'mt-0',
						'pl-0',
						'sm:ps-0',
						'prose',
						'italic',),
				}, raw_(footnote.html)),
			]),
		])
	)
}
