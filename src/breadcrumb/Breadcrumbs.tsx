import { Astro__url__pathname__memo } from '@btakita/domain--server/src/astro/Astro__url__pathname.ts'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { createMemo, For, Show, type VoidProps } from 'solid-js'
import './Breadcrumbs.css'
export function Breadcrumbs($p:VoidProps<{
	ctx?:Ctx
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	// Remove current url path and remove trailing slash if exists
	const current_url_path_ = createMemo(()=>
		Astro__url__pathname__memo(ctx).replace(/\/+$/, ''))
	// Get url array from path
	// eg: /tags/tailwindcss => ['tags', 'tailwindcss']
	const breadcrumb_a_ = createMemo(()=>{
		const breadcrumb_list = current_url_path_().split('/').slice(1)
		// if breadcrumb is Home > Posts > 1 <etc>
		// replace Posts with Posts (page number)
		if (breadcrumb_list[0] === 'posts') {
			breadcrumb_list.splice(0, 2, `Posts (page ${breadcrumb_list[1] || 1})`)
		}
		return breadcrumb_list
	})
	return (
		<ctx__Context.Provider value={ctx}>
			<Show when={breadcrumb_a_().length > 1}>
				<nav class="Breadcrumbs mx-auto mb-1 mt-8 w-full max-w-3xl px-4" aria-label="breadcrumb">
					<ul>
						<li>
							<a href="/">Home</a>
							<span aria-hidden="true">&nbsp;&gt;&nbsp;</span>
						</li>
						<For each={breadcrumb_a_()}>{(breadcrumb, idx_)=>
							<Show when={idx_() + 1 === breadcrumb_a_().length} fallback={
								<li>
									<a href={`/${breadcrumb}`}>{breadcrumb}</a>
									<span aria-hidden="true">&nbsp;&gt;&nbsp;</span>
								</li>
							}>
								<li>
							<span
								class={`${idx_() > 0 ? 'lowercase' : 'capitalize'}`}
								aria-current="page"
							>
								{/* make the last part lowercase in Home > Tags > some-tag */}
								{breadcrumb}
							</span>
								</li>
							</Show>
						}</For>
					</ul>
				</nav>
			</Show>
		</ctx__Context.Provider>
	)
}