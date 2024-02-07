import { type relement_env_T } from 'relementjs'
import { em_, p_ } from 'relementjs/html'
import { tb_a_ } from '../anchor/index.js'
export function repost__p_<env_T extends relement_env_T>({
	href
}:{ href:string }) {
	return (
		p_<env_T>([
			em_([
				'Repost from ',
				tb_a_({ href })
			])
		])
	)
}
