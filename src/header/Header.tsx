import {
	logo_image__enable__memo,
	logo_image__height__memo,
	logo_image__svg__memo,
	logo_image__width__memo,
	site__title__memo
} from '@btakita/domain--server--blog'
import { type Ctx } from '@ctx-core/object'
import { ctx__Context, ctx__Context__use } from '@ctx-core/solid-js'
import { type ParentProps, Show } from 'solid-js'
import { Hr } from '../html_tag'
import './Header.css'
export function Header($p:ParentProps<{
	ctx?:Ctx
	active?:string
}
>) {
	const ctx = $p.ctx || ctx__Context__use()
	const active = $p.active
	return [
		<ctx__Context.Provider value={ctx}>
			<header class="Header">
				<a
					id="skip-to-content"
					class="absolute -top-full left-16 z-50 bg-skin-accent px-3 py-2 text-skin-inverted transition-all focus:top-4"
					href="#main"
				>Skip to content</a>
				<div class="nav-container mx-auto flex max-w-3xl flex-col items-center justify-between sm:flex-row">
					<div class="top-nav-wrap relative flex w-full items-start justify-between p-4 sm:items-center sm:py-8">
						<a href="/" class="logo whitespace-nowrap absolute py-1 text-xl font-semibold sm:static sm:text-2xl">
							<Show
								when={logo_image__enable__memo(ctx)}
								fallback={site__title__memo(ctx)}
							>
								<img
									src={`/assets/images/${logo_image__svg__memo(ctx) ? 'logo.svg' : 'logo.png'}`}
									alt={site__title__memo(ctx)}
									width={logo_image__width__memo(ctx)}
									height={logo_image__height__memo(ctx)}
								/>
							</Show>
						</a>
						<nav
							id="nav-menu"
							class="flex w-full flex-col items-center sm:ml-2 sm:flex-row sm:justify-end sm:space-x-4 sm:py-0"
						>
							<button
								class="hamburger-menu focus-outline self-end p-2 sm:hidden"
								aria-label="Open Menu"
								aria-expanded="false"
								aria-controls="menu-items"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="menu-icon h-6 w-6 scale-125 fill-skin-base"
								>
									<line x1="7" y1="12" x2="21" y2="12" class="line"></line>
									<line x1="3" y1="6" x2="21" y2="6" class="line"></line>
									<line x1="12" y1="18" x2="21" y2="18" class="line"></line>
									<line x1="18" y1="6" x2="6" y2="18" class="close"></line>
									<line x1="6" y1="6" x2="18" y2="18" class="close"></line>
								</svg>
							</button>
							<ul
								id="menu-items"
								class="display-none sm:flex mt-4 grid w-44 grid-cols-2 grid-rows-4 gap-x-2 gap-y-2 sm:ml-0 sm:mt-0 sm:w-auto sm:gap-x-5 sm:gap-y-0"
							>{$p.children}</ul>
						</nav>
					</div>
				</div>
				<Hr/>
			</header>
		</ctx__Context.Provider>
	]
}
