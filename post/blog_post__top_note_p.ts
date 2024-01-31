import { type relement_env_T, type tag_dom_T } from 'relementjs'
import { em_, p_ } from 'relementjs/html'
export function blog_post__top_note_p_<env_T extends relement_env_T>(
	...children:tag_dom_T[]
) {
	return (
		p_<env_T>(
			em_(...children))
	)
}
