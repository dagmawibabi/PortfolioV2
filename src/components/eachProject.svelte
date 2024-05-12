<script>
	import { Code2, Link, LucideExternalLink } from "lucide-svelte";


    /**
	 * @type {{ projectName: any; description: any; }}
	 */
     export var eachProject;


</script>

<div class="pt-8">
    <div class="flex items-center">
        <div class="border-b border-dashed border-black w-10 h-2"></div>
        <div class="group bg-white w-5/6 drop-shadow-lg border border-zinc-300 py-5 px-8 hover:bg-black hover:text-white duration-200 cursor-pointer">
            <p class="text-2xl font-semibold group-hover:underline group-hover:underline-offset-8"> {eachProject.projectName} </p>
            <p class="pt-4"> {eachProject.description} </p>
            <div class="flex gap-2 pt-5">
                <div class="flex justify-center items-center px-5 pt-1 pb-2 border border-black group-hover:bg-white group-hover:text-black"> 
                    <LucideExternalLink size={16} />
                    <span class="pl-2 font-semibold">
                        View Live
                    </span>
                </div>
                <div class="flex justify-center items-center pl-5 pr-6 pt-1 pb-2 border border-black group-hover:bg-white group-hover:text-black"> 
                    <Code2 size={18} />
                    <span class="pl-2 font-semibold">
                        Source Code 
                    </span>
                </div>
            </div>
        </div> 
    </div>
</div>