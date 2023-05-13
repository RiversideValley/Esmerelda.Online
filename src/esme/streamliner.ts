export const config = {
    msal: {
        endpoint: {
            rel: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=ded5e9d5-eb0c-45c4-a26f-3d665262f8a1&scope=user.read%20mail.read&response_type=code&redirect_uri=http://esmerelda.tech/_federal/callback",
            dev: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=ded5e9d5-eb0c-45c4-a26f-3d665262f8a1&scope=user.read%20mail.read&response_type=code&redirect_uri=http://localhost:5173/_federal/callback",
            pre: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=ded5e9d5-eb0c-45c4-a26f-3d665262f8a1&scope=user.read%20mail.read&response_type=code&redirect_uri=http://localhost:4173/_federal/callback"
        },
        logout: "https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=http://esmerelda.tech/"
    }
}
