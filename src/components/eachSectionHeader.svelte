<script lang="ts">
	import { ArrowUp, ArrowDown } from 'lucide-svelte';
	export var headerTitle: string;
	export var currentStore: any;

	let stateVar = false;
</script>

<div>
	<!-- Section Header -->
	<div class="flex gap-2 items-center font-bold text-2xl font-mono text-white">
		<div class="bg-zinc-950 py-2 px-10 w-fit">{headerTitle}</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="text-black hover:text-white rounded-full hover:bg-black p-2 cursor-pointer"
			on:click={(e) => {
				stateVar = !stateVar;
				currentStore.set(!$currentStore);
			}}
		>
			{#if stateVar == true}
				<ArrowDown size={16} className="hover:text-white" />
			{:else}
				<ArrowUp size={16} />
			{/if}
		</div>
	</div>
</div>
