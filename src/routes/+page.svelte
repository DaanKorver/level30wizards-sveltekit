<script lang="ts">
	import type { PageData } from './$types';
	import Feature from '$lib/components/shared/Feature.svelte';

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

	li {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: 0.5rem;
	}

	li::before {
		content: '-';
	}
</style>
