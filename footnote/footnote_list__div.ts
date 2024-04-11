import { footnote_o_ } from '@rappstack/domain--server--blog/footnote'
import { class_ } from 'ctx-core/html'
import { raw_, type relement_env_T, type wide_ctx_T } from 'relementjs'
import { a_, div_, em_, p_ } from 'relementjs/html'
import { heroicons_uturn_up_ } from '../icon/index.js'
import { _footnote__html_id__new, _footnote__ref__html_id__new } from './_footnote__html_id.js'
export function footnote_list__div_<env_T extends relement_env_T>({
	ctx,
	class: _class,
}:{
	ctx:wide_ctx_T
	class?:string
}) {
	const footnote_o = footnote_o_(ctx)
	if (!footnote_o) return
	return (
		div_<env_T>({
			class: _class,
		}, [
			...footnote_o.footnote_a.map(footnote=>[
				p_({ id: _footnote__html_id__new(footnote) }, [
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
					em_(raw_(footnote.html)),
				]),
			]),
		])
	)
}
