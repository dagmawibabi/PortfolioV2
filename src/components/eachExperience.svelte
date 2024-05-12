<script>

    /**
	 * @type {{ projectName: any; description: any; }}
	 */
     export var eachExperience;


</script>

<div class="pt-8">
    <div class="flex">
        <div class="border-b border-dashed border-black w-10 h-2 pt-20">
        </div>
        <div class="bg-white w-5/6 border border-black p-5 hover:bg-black hover:text-white duration-200 cursor-pointer">
            <p class="text-2xl font-semibold"> {eachExperience.projectName} </p>
            <p class="pt-2"> {eachExperience.description} </p>
        </div>            
    </div>
</div>