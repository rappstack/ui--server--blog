import { class_ } from '@ctx-core/html'
import { type ParentProps, Show } from 'solid-js'
export function LinkButton($p:ParentProps<{
	href:string
	class?:string
	'aria-label'?:string
	title?:string
	disabled?:boolean
}
>) {
	const href = $p.href
	const aria_label = $p['aria-label']
	const title = $p.title
	const disabled = $p.disabled
	return [
		<a
			href={disabled ? '#' : href}
			tabindex={disabled ? '-1' : '0'}
			class={class_('group inline-block hover:text-skin-accent', $p.class)}
			aria-label={aria_label}
			title={title}
			aria-disabled={disabled}
			innerHTML={typeof $p.children === 'string' ? $p.children : null}
		>
			<Show when={typeof $p.children !== 'string'}>
				{$p.children}
			</Show>
		</a>
	]
}
