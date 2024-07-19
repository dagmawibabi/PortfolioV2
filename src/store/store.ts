/* eslint-disable prefer-const */
import { writable } from 'svelte/store';

export let hideAboutMe = writable(false);
export let hideCreatives = writable(false);
export let hideProjects = writable(false);
export let hideExperiences = writable(false);
export let backgroundImage = writable(
	'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png'
);
