<script lang="ts">
	export let link: string | string[] | null = null;
</script>

<li>
	<slot>Some feature text</slot>
	{#if link}
		<!-- Conditional Rendering -->
		<ul>
			{#if Array.isArray(link)}
				<!-- Each loop -->
				{#each link as lnk, i}
					<li>
						<a target="_blank" rel="noreferrer" href={lnk}>Reference #{i + 1}</a>
					</li>
				{/each}
			{:else}
				<li><a target="_blank" rel="noreferrer" href={link}>Reference</a></li>
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
