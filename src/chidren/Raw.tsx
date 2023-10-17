import { type ParentProps, Show } from 'solid-js'
export function Raw($p:ParentProps) {
	const children = $p.children
	return (
		<Show when={typeof children === 'string'} fallback={children}>
			<template>{children}</template>
		</Show>
	)
}