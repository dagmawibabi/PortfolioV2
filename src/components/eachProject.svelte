<script>
	import { Code2, LucideExternalLink, Layers } from 'lucide-svelte';

	/**
	 * @type {{ projectName: any; description: any; tags: any}}
	 */
	export var eachProject;
</script>

<div class="pt-9">
	<div class="group flex items-center">
		<!-- Side Line -->
		<div class="border-b border-dashed group-hover:border-solid border-black w-10 h-2"></div>

		<!-- Project Container -->
		<div class="relative flex flex-col w-5/6">
			<!-- Project Details -->
			<div
				class="py-5 px-8 bg-white drop-shadow-lg group-hover:drop-shadow-2xl border border-zinc-300 group-hover:border-black cursor-pointer group-hover:rounded-xl duration-200"
			>
				<p
					class="text-2xl text-zinc-600 group-hover:text-black font-semibold group-hover:underline-offset-8"
				>
					{eachProject.projectName}
				</p>
				<p class="pt-3">{eachProject.description}</p>
				<div class="flex gap-2 pt-6">
					<div
						class="flex justify-center items-center px-5 pt-1 pb-2 border border-zinc-300 hover:border-black hover:bg-white text-zinc-600 group-hover:text-black hover:rounded-xl duration-200"
					>
						<LucideExternalLink size={16} />
						<span class="pl-2 font-semibold"> View Live </span>
					</div>
					<div
						class="flex justify-center items-center px-5 pt-1 pb-2 border border-zinc-300 hover:border-black hover:bg-white text-zinc-600 group-hover:text-black hover:rounded-xl duration-200"
					>
						<Code2 size={18} />
						<span class="pl-2 font-semibold"> Source Code </span>
					</div>
				</div>
			</div>

			<!-- Project Tags -->
			<div
				class="absolute -mt-5 right-5 bg-white hidden group-hover:flex drop-shadow-md border rounded-xl border-black overflow-clip duration-200"
			>
				<div class="flex lowercase">
					<div class="py-1 px-3 bg-black text-white cursor-default">
						<Layers size={18} />
					</div>
					{#each eachProject.tags as tag}
						<div
							class="py-1 px-4 font-mono font-semibold border-l border-white hover:bg-black hover:text-white cursor-default"
						>
							{tag}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
