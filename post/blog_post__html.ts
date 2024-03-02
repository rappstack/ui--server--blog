import { blog_post__tag_ } from '@rappstack/domain--server--blog/post'
import { response__drain } from '@rappstack/domain--server/response'
import { nullish__none_ } from 'ctx-core/function'
import { type request_ctx_T, rmemo__wait } from 'relysjs/server'
import { id_be_memo_pair_ } from 'rmemo'
export const [
	,
	blog_post__html_,
] = id_be_memo_pair_<string|undefined, unknown, request_ctx_T>(
	'blog_post__html',
	(ctx, blog_post__html$)=>
		nullish__none_([blog_post__tag_(ctx)],
			blog_post__tag=>{
				// Need to call blog_post__tag(ctx) in the next microtask to avoid circular dependency
				// TODO: why?
				queueMicrotask(()=>blog_post__html$._ = '' + blog_post__tag(ctx))
				return blog_post__html$.val
			}))
export const [
	,
	blog_post__text_,
] = id_be_memo_pair_<string|undefined, unknown, request_ctx_T>(
	'blog_post__text',
	(ctx, blog_post__text$)=>
		nullish__none_([blog_post__html_(ctx)],
			blog_post__html=>{
				let blog_post__text = ''
				const rw = new HTMLRewriter()
					.on('p', {
						text(text) {
							blog_post__text += text.text
						}
					})
				response__drain(
					rw.transform(new Response(blog_post__html))
				).then(()=>{
					blog_post__text$._ = blog_post__text
				}).catch(err=>console.error(err))
				return blog_post__text$.val
			}))
export const [
	,
	blog_post__estimate_read_minutes_,
] = id_be_memo_pair_(
	'blog_post__estimate_read_minutes',
	(ctx:request_ctx_T)=>
		nullish__none_([blog_post__text_(ctx)],
			blog_post__text=>
				Math.ceil(blog_post__text!.split(/\s+/).length / 200)))
export function blog_post__estimate_read_minutes__wait(ctx:request_ctx_T) {
	return rmemo__wait(()=>blog_post__estimate_read_minutes_(ctx), $=>$ != null, 5_000)
}
