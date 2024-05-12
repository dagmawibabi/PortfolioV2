<script>

    /**
	 * @type {{ projectName: any; description: any; }}
	 */
     export var eachProject;


</script>

<div class="pt-8">
    <div class="flex">
        <div class="border-b border-dashed border-black w-10 h-2 pt-20"></div>
        <div class="group bg-white w-5/6 border drop-shadow-lg border-zinc-300 py-5 px-8 hover:bg-black hover:text-white duration-200 cursor-pointer">
            <p class="text-2xl font-semibold group-hover:underline group-hover:underline-offset-8"> {eachProject.projectName} </p>
            <p class="pt-4"> {eachProject.description} </p>
            <div class="flex gap-2 pt-5">
                <div class="px-5 py-1 border border-black group-hover:bg-white group-hover:text-black"> Source Code </div>
                <div class="px-5 py-1 border border-black group-hover:bg-white group-hover:text-black"> View Live </div>
            </div>
        </div> 
    </div>
</div>