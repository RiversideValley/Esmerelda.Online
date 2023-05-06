import * as msal from '@azure/msal-browser';

var clientId = process.env.REACT_APP_CLIENT_ID;

const authConfig = {
	auth: {
		clientId: 'ded5e9d5-eb0c-45c4-a26f-3d665262f8a1'
	}
};

const msalInstance = new msal.PublicClientApplication(authConfig);
await msalInstance.initialize();

msalInstance.loginPopup({
	redirectUri: 'about:blank'
});
