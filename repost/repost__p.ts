import { tb_a_ } from '@rappstack/ui--any/anchor'
import { type relement_env_T } from 'relementjs'
import { em_, p_ } from 'relementjs/html'
export function repost__p_<env_T extends relement_env_T>({
	href
}:{ href:string }) {
	return (
		p_<env_T>([
			em_([
				'Repost from ',
				tb_a_({ href, nofollow: true })
			])
		])
	)
}
