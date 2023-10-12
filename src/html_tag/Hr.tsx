import { type VoidProps } from 'solid-js'
export function Hr($p:VoidProps<{
	'no-padding'?:boolean
	'aria-hidden'?:boolean
}
>) {
  return (
		<div class={`max-w-3xl mx-auto ${$p['no-padding'] ? 'px-0' : 'px-4'}`}>
			<hr class="border-skin-line" aria-hidden={$p['aria-hidden']}/>
		</div>
	)
}