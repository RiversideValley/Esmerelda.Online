<script lang="ts">
    import { NavBar } from "$lib";
    import { onMount } from "svelte";
    import { ProgressRing, Button, ContentDialog, TextBlock } from "fluent-svelte";

	import Alert from "@fluentui/svg-icons/icons/alert_urgent_24_filled.svg?raw"

    	const items = [
        {
			name: "{UserName}",
			href: "/_federal/account",
			content: 1,
			icon: ""
		},
		{
			name: "",
			href: "/_notifications",
			content: 1,
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

