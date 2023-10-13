import { class_ } from '@ctx-core/html'
import { type ParentProps } from 'solid-js'
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
	const children = $p.children
	return [
		<a
			href={disabled ? '#' : href}
			tabindex={disabled ? '-1' : '0'}
			class={class_('group inline-block hover:text-skin-accent', $p.class)}
			aria-label={aria_label}
			title={title}
			aria-disabled={disabled}
			{...
				typeof children === 'string'
					? { innerHTML: children }
					: { children }
			}
		/>
	]
}
