<script>
	export const items = [
		{ endpoint: "people", label: "People" },
		{ endpoint: "films", label: "Films" },
		{ endpoint: "starships", label: "Starships" },
		{ endpoint: "vehicles", label: "Vehicles" },
		{ endpoint: "species", label: "Species" },
		{ endpoint: "planets", label: "Planets" },
	]
	export let segment;
</script>

<nav>
	<ul>
		<li>
			<a
				class:selected='{segment === undefined}'
				href='.'
				>
				Home
			</a>
		</li>
		{#each items as item}
			<li>
				<a
					rel=prefetch
					class:selected='{segment === item.endpoint}'
					href="{item.endpoint}"
					>
					{item.label}
				</a>
			</li>
		{/each}
		<li>
			<a
				class:selected='{segment === "about"}'
				href='about'
				>
				About
			</a>
		</li>
	</ul>
</nav>
