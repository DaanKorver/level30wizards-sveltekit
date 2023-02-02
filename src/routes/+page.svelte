<script lang="ts">
	import type { PageData } from './$types';
	import Star from '$lib/icons/star.svg?component';
	import Feature from '$lib/components/shared/Feature/Feature.svelte';

	export let data: PageData;
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
</ul>

<h2>Examples</h2>
<h3>First 10 entries from CMS</h3>
<ul>
	{#each data.recepts as recept}
		<!-- Typings for CMS with GraphQL -->
		<li>{recept.titel}</li>
	{/each}
</ul>

<style>
	h1 > span {
		display: block;
		color: dodgerblue;
	}
</style>
