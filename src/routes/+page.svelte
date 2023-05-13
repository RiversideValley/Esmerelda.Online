<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from "$app/stores";
    import { onMount } from "svelte";

    import { ProgressRing, Button, ContentDialog, TextBlock } from "fluent-svelte";

	import { NavBar, NavBarItems } from "$lib";
	import { Dashboard } from "$esme";
	import { loggedIn } from "$esme";

    let theme: "light" | "dark" = "light";

	onMount(() => {
		theme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
			theme = e.matches ? "dark" : "light";
		});
	});

</script>
<svelte:head>
	<script type="text/javascript">
		(function(c,l,a,r,i,t,y){
			c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
			t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
			y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
		})(window, document, "clarity", "script", "h04bvde4tj");
	</script>
	<title>Esmerelda</title>
	<meta name="description" content="Your sweet maid." />
	<meta name="keywords" content="Esmerelda, Esmereld, Esmeralda, Esmerelda.tech, Esmereld.tech, Esmeralda.tech, Riverside, Cloud, Cloud computing, cloud-compute, Microsoft.Compute, AWS, Azure, Snowflake, Riverside Valley Corporation, Riverside Valley, Hyper, Hyper Platform, Hypercloud, Hyperflare, Hypercomponents, Streamliner, Protocol, Protocol Interconnect, Hyperstream, Hyperlogin, Hyperstatic, Hyperlogic, Hype, Esmerelda Hyper, Esme, Esme Relda, Esmerelda Hyper Platform" />
</svelte:head>

{#if $loggedIn === 'true'}
	<NavBar {NavBarItems} />

	<Dashboard />
{:else}
	<meta http-equiv="refresh" content="0; url=/_federal/streamline" />
{/if}
