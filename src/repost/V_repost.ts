import { H_ } from '@btakita/domain--all--blog'
import { type Ctx } from '@ctx-core/object'
import type { VanShape } from 'van-type-delegate'
import { V_atb } from '../anchor'
export function V_repost<V extends VanShape>({ ctx, href }:{ ctx:Ctx, href:string }) {
	const H = H_<V>(ctx)
	return (
		H.p(
			H.em('Repost from ', V_atb<V>({ ctx, href }))))
}
