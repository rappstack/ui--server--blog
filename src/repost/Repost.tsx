import { type VoidProps } from 'solid-js'
import { Atb } from '../anchor'
export function Repost($p:VoidProps<{
	href:string
}>) {
  return (
		<p>
			<em>
				Repost from
				{' '}<Atb href={$p.href}/>
			</em>
		</p>
	)
}