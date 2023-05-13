<script>
    import { dev } from "$app/environment";

    import { config } from "$esme"
</script>

{#if dev}
    <meta http-equiv="refresh" content="0; url={config.msal.endpoint.dev}" />
{:else}
    <meta http-equiv="refresh" content="0; url={config.msal.endpoint.rel}" />
{/if}