import { blog_post__tag_ } from '@rappstack/domain--server--blog/post'
import { nullish__none_, run } from 'ctx-core/function'
import { type request_ctx_T } from 'relysjs/server'
import { id_be_memo_pair_ } from 'rmemo'
export const [
	blog_post__html$_,
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
	blog_post__text$_,
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
				const response = rw.transform(new Response(blog_post__html))
				run(async ()=>{
					const reader = response.body!.getReader()
					while (!(await reader.read()).done) {
						/* empty */
					}
				}).then(()=>{
					blog_post__text$._ = blog_post__text
				}).catch(err=>console.error(err))
				return blog_post__text$.val
			}))
export const [
	blog_post__estimate_read_minutes$_,
	blog_post__estimate_read_minutes_,
] = id_be_memo_pair_(
	'blog_post__estimate_read_minutes',
	(ctx:request_ctx_T)=>
		nullish__none_([blog_post__text_(ctx)],
			blog_post__text=>
				Math.ceil(blog_post__text!.split(/\s+/).length / 200))
)
