<script lang="ts">
	export var Icon: any;
	export var label: any;
	export var description: any;
</script>

<div class="p-2">
	<div
		class="h-56 group flex flex-col justify-center items-center border border-zinc-300 hover:border-zinc-950 text-zinc-600 hover:text-black hover:rounded-xl"
	>
		<div class="absolute -top-6 hidden group-hover:block">
			<div class="border border-black p-3 rounded-full bg-white">
				<svelte:component this={Icon} size={20} />
			</div>
		</div>
		<svelte:component this={Icon} class="group-hover:hidden block" />

		<p class="pt-2 group-hover:text-black font-semibold">{label}</p>
		<p class="pt-2 px-5 text-center hidden group-hover:block duration-1000">
			{description}
		</p>
		<div class="pt-6 group-hover:pt-3">
			<div
				class="border group-hover:border-zinc-400 group-hover:rounded-2xl duration-150 hover:border-white"
			>
				<div
					class="px-4 py-2 group-hover:py-1 group-hover:rounded-2xl hover:border-black border w-max h-max hover:font-semibold"
				>
					Read Blogs
				</div>
			</div>
		</div>
	</div>
</div>
