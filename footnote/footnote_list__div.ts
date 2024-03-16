import { footnote_o_ } from '@rappstack/domain--server--blog/footnote'
import { class_ } from 'ctx-core/html'
import { raw_, type relement_env_T, type wide_ctx_T } from 'relementjs'
import { a_, div_, em_, p_, sub_ } from 'relementjs/html'
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
		div_<env_T>({ class: _class }, [
			...footnote_o.footnote_a.map(footnote=>[
				p_({ id: _footnote__html_id__new(footnote) }, [
					'[' + footnote.seq + ']:',
					em_(raw_(footnote.html)),
					' ',
					sub_({
						class: class_(
							'inline-block',
							'float-right')
					},[
						a_({
							href: '#' + _footnote__ref__html_id__new(footnote),
							class: class_(
								'inline-block',
								'relative',
								'ml-auto')
						}, [
							heroicons_uturn_up_({
								class: class_(
									'h-3',
									'w-3')
							})
						])
					]),
				]),
			]),
		])
	)
}
