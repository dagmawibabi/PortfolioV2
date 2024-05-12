<script lang="ts">
    import { Github, GitBranch} from 'lucide-svelte';
    import EachExperience from "../components/eachExperience.svelte";
    import EachProject from "../components/eachProject.svelte";


    var projects = [
        {
            projectName: "Telegram Community Gallery",
            description: "Telegram Community Gallery is a platform where users can discover and submit their favorite Telegram channels and groups, creating a vibrant space for community exploration. Whether you're a seasoned Telegram user or just diving into the world of Telegram communities, this platform is designed with you in mind. 😊"
        },
        {
            projectName: "Telegram Community Gallery",
            description: "Telegram Community Gallery is a platform where users can discover and submit their favorite Telegram channels and groups, creating a vibrant space for community exploration. Whether you're a seasoned Telegram user or just diving into the world of Telegram communities, this platform is designed with you in mind. 😊"
        },
        {
            projectName: "Telegram Community Gallery",
            description: "Telegram Community Gallery is a platform where users can discover and submit their favorite Telegram channels and groups, creating a vibrant space for community exploration. Whether you're a seasoned Telegram user or just diving into the world of Telegram communities, this platform is designed with you in mind. 😊"
        },
        {
            projectName: "Telegram Community Gallery",
            description: "Telegram Community Gallery is a platform where users can discover and submit their favorite Telegram channels and groups, creating a vibrant space for community exploration. Whether you're a seasoned Telegram user or just diving into the world of Telegram communities, this platform is designed with you in mind. 😊"
        },
    ]


</script>

<div class="w-full">
    <div class="w-1/2 h-screen mx-auto border-zinc-200">
        <div class="pt-28"></div>
        <div class="font-bold text-6xl py-2 px-10 w-fit font-mono bg-black text-white"> Dagmawi Babi </div>
        <div class="pt-5"></div>
        <!-- Creativity -->
        <div class="font-bold text-2xl py-2 px-10 w-fit font-mono bg-black text-white"> Creativity </div>
        <div class="pl-16">
            <div class="border-l border-dashed border-l-black pb-10">
                <div class="pt-8">
                    <div class="flex">
                        <div class="border-b border-dashed border-black w-10 h-2 pt-20"></div>
                        <div class="group flex bg-white w-5/6 border-zinc-300 hover:bg-black hover:text-white duration-200 cursor-pointer">
                            <div class="m-2">
                                <div class="w-72 h-36 border drop-shadow-lg border-zinc-300">
                                    hi
                                </div>
                            </div>
                            <div class="m-2">
                                <div class="w-72 h-36 border drop-shadow-lg border-zinc-300">
                                    hi
                                </div>
                            </div>
                            <div class="m-2">
                                <div class="w-72 h-36 border drop-shadow-lg border-zinc-300">
                                    hi
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <!-- Projects -->
        <div class="font-bold text-2xl py-2 px-10 w-fit font-mono bg-black text-white"> Projects </div>
        <div class="pl-16">
            <div class="border-l border-dashed border-l-black pb-10">
                {#each projects as eachProject}
                    <EachProject {eachProject}/>
                {/each}
                <div class="pt-6 pb-5 pl-10 flex justify-end w-11/12 pr-16">  
                    <div class="hover:border border border-transparent hover:border-black underline-offset-8 flex py-3 px-6">
                        <Github size={20}/>
                        <span class="pl-2 text-xl font-semibold">
                            More on Github
                        </span>
                    </div>
                        
                </div>
            </div>
        </div>
        <!-- Experience -->
        <div class="font-bold text-2xl py-2 px-10 w-fit font-mono bg-black text-white"> Experience </div>
        <div class="pl-16">
            <div class="border-l border-dashed border-l-black pb-10">
                {#each projects as eachExperience}
                    <EachExperience {eachExperience}/>
                {/each}
            </div>
        </div>
        <div class="font-bold py-2 px-10 w-fit font-mono bg-black text-white"> Dagmawi Babi </div>
    </div>
</div>