<script lang="ts">
	import { page } from "$app/stores";
	import { TextBlock } from "fluent-svelte";
	import { externalLink } from "$lib";

	interface NavBarItem {
		path: string;
		name: string;
		icon?: string;
	}

	export let NavBarItems: NavBarItem[];
</script>

<header class="navbar">
	<div class="navbar-inner">
		<a class="logo" href="/">
			<img src="https://cloud.esmerelda.tech/Branding/Assets/Esmerelda/Logo.png" width="32" height="32" alt="Esmerelda Logo" />
			Esmerelda <TextBlock variant="caption">dev</TextBlock>
		</a>
		<nav>
			{#each NavBarItems as { path, name, icon }}
				<a
					href={path}
					sveltekit:prefetch
					class:selected={$page.url.pathname === path ||
						($page.url.pathname.split("/").length > 1 &&
							path.split("/").length > 1 &&
							$page.url.pathname.startsWith(path) &&
							!(path === "" || path === "/")) ||
						(path === "/" && $page.url.pathname === "")}
				>
					{#if icon}
						{@html icon}
					{/if}
					<span>{name}</span>
				</a>
			{/each}
		</nav>
		<div class="buttons">
			<slot name="buttons" />
		</div>
	</div>
</header>

<style lang="scss">
	@use "./NavBar";
</style>
