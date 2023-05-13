<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from "$app/stores";

    import { loggedIn, token } from '$esme';

    if ($page.url.search.startsWith("?code")) {
        console.log("Login successful.")
        if ($page.url.search.includes("session_state")) {
            const session_state = $page.url.searchParams.get("session_state")
        }

        if (browser) {
            loggedIn.set('true')
            token.set($page.url.searchParams.get("code"))
        }
    } else if ($page.url.search.startsWith("?error")) {
        throw new Error($page.url.searchParams.get("error_description"))
    } else {
        throw new Error("No authentication response received.")
    }

</script>

<meta http-equiv="refresh" content="0; url=/" />