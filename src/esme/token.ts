import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const tokenDefaultValue = 'STREAMLINED_HYPER_TOKEN';
const tokenInitialValue = browser ? window.localStorage.getItem('token') ?? tokenDefaultValue : tokenDefaultValue;
 
const token = writable<string>(tokenInitialValue);
 
token.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('token', value);
  }
});
 
export default token;