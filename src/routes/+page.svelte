<script lang="ts">
    import { NavBar } from "$lib";
	import type { NavBarIcon, NavBarItem } from "$lib";
    import { onMount } from "svelte";
    import { ProgressRing, Button, ContentDialog, TextBlock } from "fluent-svelte";

	import Alert from "@fluentui/svg-icons/icons/alert_urgent_24_filled.svg?raw"

    const NavBarItems: NavBarItem = [
        {
			name: "{UserName}",
			path: "/_federal/account",
			external: false,
			icon: ""
		}
	];

	const NavBarIcons: NavBarIcon = [
		{
			name: "Notifications",
			path: "/_federal/notifications",
			icon: Alert
		}
	];

    let theme: "light" | "dark" = "light";

	onMount(() => {
		theme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
			theme = e.matches ? "dark" : "light";
		});
	});
</script>
<svelte:head>
	<title>Esmerelda</title>
	<meta name="description" content="Your sweet maid." />
	<meta name="keywords" content="Esmerelda, Esmereld, Esmeralda, Esmerelda.tech, Esmereld.tech, Esmeralda.tech, Riverside, Cloud, Cloud computing, cloud-compute, Microsoft.Compute, AWS, Azure, Snowflake, Riverside Valley Corporation, Riverside Valley" />
</svelte:head>

<NavBar {NavBarItems} />

