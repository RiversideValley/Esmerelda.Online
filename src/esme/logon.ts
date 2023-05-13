import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const logonDefaultValue = 'true';
const logonInitialValue = browser ? window.localStorage.getItem('loggedIn') ?? logonDefaultValue : logonDefaultValue;
 
const loggedIn = writable<string>(logonInitialValue);
 
loggedIn.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('loggedIn', value);
  }
});
 
export default loggedIn;