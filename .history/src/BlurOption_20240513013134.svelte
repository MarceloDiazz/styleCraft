<script lang="ts">
  import { writable } from "svelte/store";
  import { rangeStrength, selectedBlurOption } from "./store";

</script>


<div class="flex gap-10  mt-10 ">
    <!-- Select -->
    <form class="flex-1 ">
      <label
        for="modeBlur"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Modo:</label
      >
      <select
        on:click={(event)=>{
          selectedBlurOption.set(event.currentTarget.value)
        }}
        id="modeBlur"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="e_blur:">Regular</option>
        <option value="e_blur_faces:">Rostro</option>
      </select>
    </form>
    <div class="flex-1 ">
      <label
        for="steps-range"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Fuerza:</label
      >
      <div class="flex flex-col gap-3">
        <!-- Step range -->
        <input
          on:change={(event) => {
            let range = Number(event.currentTarget.value);
            rangeStrength.set(range);
          }}
          id="steps-range"
          type="range"
          min="0"
          max="2000"
          value={$rangeStrength}
          step="0"
          class=" h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <!-- Value Range -->
        <form class="max-w-sm">
         
          <input
            on:keyup={(event) => {
              console.log("EE");
              let range = Number(event.currentTarget.value);
              rangeStrength.set(range);
            }}
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            class=" w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`${Number($rangeStrength)}`}
            value={$rangeStrength > 2000 ? 2000 : $rangeStrength}
            min="0"
            required
          />
        </form>
        
      </div>
      
    </div>
    
  </div>
  <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Green</button>