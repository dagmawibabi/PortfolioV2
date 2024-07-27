<script lang="ts">
	import {
		Github,
		ArrowUp,
		ArrowDown,
		Mail,
		Send,
		Linkedin,
		Instagram,
		Twitter,
		ChevronDown,
		Podcast,
		Mic,
		NotebookPen,
		Video,
		icons
	} from 'lucide-svelte';
	import EachExperience from '../components/eachExperience.svelte';
	import EachProject from '../components/eachProject.svelte';
	import DagmawiBabiLogo from '$lib/assets/DagmawiBabiLogo2.png';
	import Me from '$lib/assets/Me.png';
	import EachSectionHeader from '../components/eachSectionHeader.svelte';

	import {
		hideAboutMe,
		hideCreatives,
		hideProjects,
		hideExperiences,
		backgroundImage
	} from '../store/store';
	import EachCreativity from '../components/eachCreativity.svelte';

	var projects = [
		{
			projectName: 'Telegram Community Gallery',
			description:
				"Telegram Community Gallery is a platform where users can discover and submit their favorite Telegram channels and groups, creating a vibrant space for community exploration. Whether you're a seasoned Telegram user or just diving into the world of Telegram communities, this platform is designed with you in mind. 😊",
			image: 'https://iconape.com/wp-content/png_logo_vector/flutter-logo.png',
			tags: ['Flutter', 'React', 'Tailwind', 'MongoDB']
		},
		{
			projectName: 'Telegram Community Gallery',
			description:
				"Telegram Community Gallery is a platform where users can discover and submit their favorite Telegram channels and groups, creating a vibrant space for community exploration. Whether you're a seasoned Telegram user or just diving into the world of Telegram communities, this platform is designed with you in mind. 😊",
			image: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png',
			tags: ['Flutter', 'React', 'Tailwind', 'MongoDB']
		},
		{
			projectName: 'Telegram Community Gallery',
			description:
				"Telegram Community Gallery is a platform where users can discover and submit their favorite Telegram channels and groups, creating a vibrant space for community exploration. Whether you're a seasoned Telegram user or just diving into the world of Telegram communities, this platform is designed with you in mind. 😊",
			image: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png',
			tags: ['Flutter', 'React', 'Tailwind', 'MongoDB']
		},
		{
			projectName: 'Telegram Community Gallery',
			description:
				"Telegram Community Gallery is a platform where users can discover and submit their favorite Telegram channels and groups, creating a vibrant space for community exploration. Whether you're a seasoned Telegram user or just diving into the world of Telegram communities, this platform is designed with you in mind. 😊",
			image:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png',
			tags: ['Flutter', 'React', 'Tailwind', 'MongoDB']
		}
	];

	var techTools = [
		{
			tech: 'Flutter',
			logo: 'https://iconape.com/wp-content/png_logo_vector/flutter-logo.png'
		},
		{
			tech: 'NextJS',
			logo: 'https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png'
		},
		{
			tech: 'SvelteKit',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Svelte_logo_by_gengns.svg/640px-Svelte_logo_by_gengns.svg.png'
		},
		{
			tech: 'Tailwind',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png'
		},
		{
			tech: 'HonoJS',
			logo: 'https://avatars.githubusercontent.com/u/98495527?s=280&v=4'
		},
		{
			tech: 'NodeJS',
			logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'
		},
		{
			tech: 'MongoDB',
			logo: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-2-1175137.png?f=webp'
		},
		{
			tech: 'Docker',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Docker-svgrepo-com.svg/900px-Docker-svgrepo-com.svg.png?20230427111848'
		},
		{
			tech: 'Kubernetes',
			logo: 'https://static-00.iconduck.com/assets.00/kubernetes-icon-2048x1995-r1q3f8n7.png'
		},
		{
			tech: 'Python',
			logo: 'https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png'
		},
		{
			tech: 'Rust',
			logo: 'https://static-00.iconduck.com/assets.00/rust-icon-2048x2047-5s6wkmk1.png'
		},
		{
			tech: 'C#',
			logo: 'https://www.netgen.co.za/wp-content/uploads/2022/03/C-image-for-Netgen-1024x1024.png'
		},
		{
			tech: 'C++',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/C%2B%2B_logo.png/800px-C%2B%2B_logo.png?20210422185554'
		},
		{
			tech: 'ChromiaDB',
			logo: 'https://imagedelivery.net/hbJAA5-ie3CnRrtzIJuUXA/5ee06278-16a7-4812-a260-9c1758a84800/public'
		},
		{
			tech: 'Unity',
			logo: 'https://w7.pngwing.com/pngs/426/535/png-transparent-unity-new-logo-tech-companies-thumbnail.png'
		},
		{
			tech: 'Arduino',
			logo: 'https://e7.pngegg.com/pngimages/758/841/png-clipart-arduino-max-electronic-circuit-pure-data-oscilloscope-raspberry-pi-icons-logo-microcontroller-thumbnail.png'
		}
	];

	var creativeProjects = [
		{
			icon: NotebookPen,
			label: 'Blog',
			description:
				'I like to write here and there about tech, philosophical and spiritual things that interest me. My blog site is called DBlogs'
		},
		{
			icon: Mic,
			label: 'Podcast',
			description:
				'I like to write here and there about tech, philosophical and spiritual things that interest me. My blog site is called DBlogs'
		},
		{
			icon: Video,
			label: 'Videos',
			description:
				'I like to write here and there about tech, philosophical and spiritual things that interest me. My blog site is called DBlogs'
		}
	];
</script>

<div class="w-full">
	<div
		class="inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] background-image: url('{$backgroundImage}')"
	>
		<div class="w-1/2 pb-96 mx-auto border-zinc-200 backdrop-blur-3xl">
			<div class="pt-10"></div>
			<div>
				<!-- <Image src="./static/assets/DagmawiBabiLogo.png" alt="Channel Logo" width={20} height={20} /> -->
				<!-- <img src="assets/DagmawiBabiLogo.png" alt=""> -->
			</div>
			<div class="flex gap-2">
				<div class="">
					<img src={DagmawiBabiLogo} alt="Channel Logo" class="w-20 object-fill" />
				</div>
				<div
					class="flex justify-center items-center py-2 pl-5 pr-10 w-fit font-mono bg-zinc-950 text-white"
				>
					<span class="pl-2 text-6xl"> Dagmawi Babi </span>
				</div>
			</div>
			<div class="pt-5"></div>

			<!-- About Me -->
			<EachSectionHeader headerTitle={'About Me'} currentStore={hideAboutMe} />

			<div class="pl-16">
				{#if $hideAboutMe == true}
					<div class="border-l border-dashed border-l-black pb-10"></div>
				{:else}
					<div class="border-l border-dashed border-l-black pb-5">
						<div class="pt-8">
							<div class="flex items-center">
								<div class="border-b border-dashed border-black w-10 h-2"></div>
								<div
									class="border group flex gap-4 p-4 bg-white w-5/6 border-zinc-300 drop-shadow-lg duration-200 cursor-pointer"
								>
									<img src={Me} alt="Me" class="w-96" />
									<div class="flex flex-col gap-3">
										<p class="text-3xl font-semibold font-mono">Hey there 👋</p>
										<p class="text-lg leading-tight">
											My name is Dagmawi Esayas and I enjoy creating tech solutions to my daily
											problems. My interest in software development started back in 2013 when I
											accidentally stumbled upon a batch programming ebook in one of my harddrives —
											turns out there's so much you could do on a black & white terminal!
										</p>
										<p class="py-2 text-lg leading-tight">
											Fast-forward to today, and I've had the privilege of working at multiple start
											ups, an event organizing company, a huge corporation, and a student-led design
											club. My main focus these days is building accessible, inclusive products and
											digital experiences at Dream Intelligence for a variety of clients.
										</p>
										<p class="text-lg leading-tight font-semibold">
											Here are some of the tech tools I use...
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
			<div class="pl-16">
				{#if $hideAboutMe == false}
					<div class="border-l border-dashed border-l-black pb-0">
						<div class="pt-0">
							<div class="flex">
								<div class="border-b border-dashed border-black w-10 h-2 pt-20"></div>
								<div
									class="border group flex gap-4 p-4 bg-white w-5/6 border-zinc-300 drop-shadow-lg duration-200 cursor-pointer"
								>
									<div class="flex flex-row flex-wrap gap-2">
										{#each techTools as eachTechTool}
											<div
												class="flex items-center border border-dotted border-zinc-500 py-1 px-5 hover:bg-black hover:text-white"
											>
												<div class="w-6 h-5 flex items-center">
													<img src={eachTechTool.logo} alt="" />
												</div>
												<span class="pl-2 text-xl">
													{eachTechTool.tech}
												</span>
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
			<!-- CONTACTS -->
			<div class="pl-16">
				{#if $hideAboutMe == false}
					<div class="border-l border-dashed border-l-black pb-10">
						<div class="flex">
							<div class="pl-10 pt-4 flex gap-3 items-center w-11/12 pr-20">
								<div class=" hover:bg-zinc-950 hover:text-white underline-offset-8 flex py-3 px-4">
									<Send size={20} />
									<span class="pl-2 text-xl font-semibold"> Telegram </span>
								</div>
								<div class=" hover:bg-zinc-950 hover:text-white underline-offset-8 flex py-3 px-4">
									<Linkedin size={20} />
									<span class="pl-2 text-xl font-semibold"> LinkedIn </span>
								</div>
								<div class=" hover:bg-zinc-950 hover:text-white underline-offset-8 flex py-3 px-4">
									<Instagram size={20} />
									<span class="pl-2 text-xl font-semibold"> Instagram </span>
								</div>
								<div class=" hover:bg-zinc-950 hover:text-white underline-offset-8 flex py-3 px-4">
									<Twitter size={20} />
									<span class="pl-2 text-xl font-semibold"> Twitter </span>
								</div>
								<div class=" hover:bg-zinc-950 hover:text-white underline-offset-8 flex py-3 px-4">
									<Github size={20} />
									<span class="pl-2 text-xl font-semibold"> Github </span>
								</div>
								<div class=" hover:bg-zinc-950 hover:text-white underline-offset-8 flex py-3 px-4">
									<Mail size={20} />
									<span class="pl-2 text-xl font-semibold"> Email </span>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Creativity -->
			<EachSectionHeader headerTitle={'Creativity'} currentStore={hideCreatives} />

			<div class="pl-16">
				{#if $hideCreatives == true}
					<div class="border-l border-dashed border-l-black pb-10"></div>
				{:else}
					<div class="border-l border-dashed border-l-black pb-10">
						<div class="pt-8">
							<div class="flex items-center">
								<!-- Side Line -->
								<div class="border-b border-dashed border-black w-10 h-2"></div>

								<!-- Creative Container -->
								<div
									class="grid grid-cols-3 bg-white w-5/6 border border-zinc-300 hover:border-zinc-400 hover:rounded-2xl drop-shadow-lg hover:drop-shadow-2xl duration-200 cursor-pointer"
								>
									{#each creativeProjects as projects}
										<EachCreativity
											Icon={projects.icon}
											label={projects.label}
											description={projects.description}
										/>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Projects -->
			<EachSectionHeader headerTitle={'Projects'} currentStore={hideProjects} />

			<div class="pl-16">
				{#if $hideProjects == true}
					<div class="border-l border-dashed border-l-black pb-10"></div>
				{:else}
					<div class="border-l border-dashed border-l-black pb-10">
						{#each projects as eachProject}
							<EachProject {eachProject} />
						{/each}

						<!-- More of Github -->
						<div class="pt-6 w-11/12 pr-12">
							<div class="flex justify-center py-3 pl-9">
								<ChevronDown size={20} />
							</div>
							<div class="flex justify-center">
								<div
									class="group flex border border-white hover:border-black items-center cursor-pointer rounded-2xl overflow-clip"
								>
									<div class="py-3 px-4 group-hover:bg-black text-white">
										<Github size={20} class=" " />
									</div>
									<span class="pl-4 pr-6 text-xl font-semibold"> More on Github </span>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Experience -->
			<EachSectionHeader headerTitle={'Experiences'} currentStore={hideExperiences} />

			<div class="pl-16">
				{#if $hideExperiences == true}
					<div class="border-l border-dashed border-l-black pb-10"></div>
				{:else}
					<div class="border-l border-dashed border-l-black pb-10">
						{#each projects as eachExperience}
							<EachExperience {eachExperience} />
						{/each}
					</div>
				{/if}
			</div>
			<div class="font-bold py-2 px-10 w-fit font-mono bg-zinc-950 text-white">
				{Date().toString().substring(0, 16)}
			</div>
		</div>
	</div>
</div>
