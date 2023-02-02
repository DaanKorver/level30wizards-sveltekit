<script lang="ts">
	import type { PageData } from './$types';
	import Star from '$lib/icons/star.svg?component';
	import Feature from '$lib/components/shared/Feature/Feature.svelte';
	import Example from '$lib/components/shared/ThrelteExample/Example.svelte';
	import Image from 'svimg';
	import { exampleStore } from '$lib/stores/store';

	// PageData is typing for the load function return
	export let data: PageData;

	let toggled = false;
	function onClick() {
		toggled = !toggled;
		toggled ? exampleStore.set('Toggled') : exampleStore.set('Another state');
	}

	// Using reactive statement
	$: console.log('From a reactive statement', $exampleStore);

	// Using subscribe
	exampleStore.subscribe((value) => console.log('From a subscribe: ', value));
</script>

<h1>Welcome to <span>SvelteKit for Wizards</span></h1>
<h2>Features of the stack</h2>
<ul>
	<Feature
		link={[
			'https://the-guild.dev/graphql/codegen',
			'https://github.com/Level30Wizards/level30wizards-next-react-stack/blob/main/.graphqlrc.js'
		]}>GraphQL codegen + Typescript Types</Feature
	>
	<Feature link="https://github.com/poppa/sveltekit-svg"
		>SVG Components using SVGOMG. This is a Star svg <Star color="dodgerblue" width="16" /></Feature
	>
	<Feature link="https://codingcat.dev/tutorial/integrating-storybook-with-sveltekit"
		>Storybook</Feature
	>
	<Feature link="https://threlte.xyz/">Three.JS + Rapier + Theatre using Threlte</Feature>
	<Feature link="https://github.com/xiphux/svimg">Image optimization using svimg</Feature>
</ul>

<h2>Examples</h2>
<h3>First 10 entries from CMS</h3>
<ul>
	{#each data.recepts as recept}
		<!-- Typings for CMS with GraphQL -->
		<li>{recept.titel}</li>
	{/each}
</ul>

<section>
	<h3>ThreeJS example</h3>
	<p>Try Orbit Controls and Hover</p>
	<Example />
</section>

<section>
	<h3>Image optimization using svimg</h3>
	<Image width={400} src="dragon.png" alt="Green dragon" />
</section>

<section>
	<h3>Store example</h3>
	<button on:click={onClick}>Click to toggle</button>
	<p>{$exampleStore}</p>
</section>

<style>
	h1 > span {
		display: block;
		color: dodgerblue;
	}
</style>
