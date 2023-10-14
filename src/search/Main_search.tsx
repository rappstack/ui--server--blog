import { type SearchItem } from '@btakita/domain--all--blog'
import { Main_search__onbind } from '@btakita/ui--all--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps } from 'solid-js'
import { Main } from '../main'
export function Main_search($p:ParentProps<{
	ctx?:Ctx
	search_item_a:SearchItem[]
}>) {
	const ctx = $p.ctx || ctx__Context__use()
	return (
		<Main
			ctx={ctx}
			title="Search"
			description="Search any article…"
			dataset={{
				onbind: Main_search__onbind,
				search_item_a: JSON.stringify($p.search_item_a),
			}}
		>
			{$p.children}
		</Main>
	)
}