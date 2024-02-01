import { unique_tag_a1_ } from '@btakita/domain--any--blog'
import { type relement_env_T } from 'relementjs'
import { ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { blog__main_fragment_ } from '../main/index.js'
import { blog_tag__li_ } from './blog_tag__li.js'
export function blog_tags__main_fragment_<env_T extends relement_env_T>({
	ctx,
}:{
	ctx:request_ctx_T
}) {
	return (
		blog__main_fragment_<env_T>({
			ctx,
			class: 'Main_tags',
			title: 'Tags',
			description: 'All the tags used in posts.'
		}, [
			ul_(
				...unique_tag_a1_(ctx).map(tag=>
					blog_tag__li_({
						name: tag,
						size: 'lg',
					})))
		])
	)
}
