<script lang="ts">
    import { NavBar } from "$lib";
    import { onMount } from "svelte";
    import { ProgressRing, Button, ContentDialog, TextBlock } from "fluent-svelte";
	import { misc } from "$dash";

	import Alert from "@fluentui/svg-icons/icons/alert_urgent_24_filled.svg?raw"

    const items: misc.NavBarItem = [
        {
			name: "{UserName}",
			href: "/_federal/account",
			icon: ""
		}
	];

	const items: misc.NavBarIcon = [
		{
			name: "Notifications",
			href: "/_federal/notifications",
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

<NavBar {items} />

