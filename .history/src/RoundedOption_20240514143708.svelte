
<script lang="ts">
  import { selectedRoundedOption } from "./store";
  import conerUpLeft from "./assets/img/corner-up-left.png"
  import cornerUpRight from "./assets/img/corner-up-right.png"
  import cornerDownLeft from "./assets/img/corner-down-left.png"
  import cornerDownRight from "./assets/img/corner-down-right.png"
  import customRadius from "./assets/img/custom-radius.png"


</script>

<div class="flex gap-10 mt-10">
    <form class="flex-1">
        <label
          for="modeBlur"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Modo:</label
        >
        <select
          on:click={(event) => {
            selectedRoundedOption.set(event.currentTarget.value);
          }}
          id="modeBlur"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="singleRadius">Single Radius</option>
          <option value="e_blur_faces:">Custom Radius</option>
          <option value="e_blur_faces:">Maximun Radius</option>
        </select>
      </form>
      {#if $selectedRoundedOption === "singleRadius"}
      <div class="flex items-center ">
        <label>
            <img src={conerUpLeft}/>
        </label>
        <span>PX</span>
      </div>
      {/if}
</div>