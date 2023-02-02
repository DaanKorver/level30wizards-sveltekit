import { writable, type Writable } from 'svelte/store';

export const exampleStore: Writable<string> = writable('Default store state');
