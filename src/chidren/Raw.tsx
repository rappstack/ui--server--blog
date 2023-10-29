import { type ParentProps, Show } from 'solid-js'
import { ssr } from 'solid-js/web'
export function Raw($p:ParentProps) {
	const children = $p.children
	return (
		<Show when={typeof children === 'string'} fallback={children}>
			{ssr(children as string) as any}
		</Show>
	)
}
