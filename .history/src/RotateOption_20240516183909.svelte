<script lang="ts">

const rotateDiv=(value:string)=>{
    console.log(value);
    
   let selectedDiv= document.getElementsByClassName("rotateDiv")[0]
    selectedDiv.classList.replace(selectedDiv.classList[0], `rotate-[${15}}deg]`);
   
    // selectedDiv.classList.add("rotate-[50deg]")    
    
}

</script>
<div class="flex mt-10 items-center gap-7 justify-center">
    <input
    on:change={(event) => {
    rotateDiv(event.currentTarget.value)
    }}
    id="steps-range"
    type="range"
    min="0"
    max="360"
    value="0"
    step="0"
    class="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />

    <div class="rotate-[80deg] h-11 w-11 bg-black rotateDiv">

    </div>
</div>
