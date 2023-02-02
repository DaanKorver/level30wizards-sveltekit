<script lang="ts">
	export let link: string | string[] | null = null;

	console.log(link);
</script>

<li>
	<slot />
	{#if link}
		<!-- Conditional Rendering -->
		<ul>
			{#if Array.isArray(link)}
				<!-- Each loop -->
				{#each link as lnk, i}
					<a target="_blank" rel="noreferrer" href={lnk}>Refference #{i + 1}</a>
				{/each}
			{:else}
				<li><a target="_blank" rel="noreferrer" href={link}>Refference</a></li>
			{/if}
		</ul>
	{/if}
</li>

<style>
	ul {
		display: flex;
		flex-direction: column;
	}

	a {
		color: dodgerblue;
	}
</style>
