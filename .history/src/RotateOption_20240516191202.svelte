<script lang="ts">
  import { rotateValue } from "./store";

  function rotate(value: any) {
    let selectedDiv = document.getElementById("div1")!;
    selectedDiv.style.webkitTransform = "rotate(" + value + "deg)";
    selectedDiv.style.transform = "rotate(" + value + "deg)";
    document.getElementById("span1")!.innerHTML = value + "deg";
  }
</script>

<div class="flex justify-center items-center gap-10 mt-10">
  <div>
    <input
      type="range"
      min="-360"
      max="360"
      value={$rotateValue}
      on:change={(event) => {
        rotateValue.set(Number(event.currentTarget.value));
        rotate(event.currentTarget.value);
      }}
    /><br />
    <input
            on:keyup={(event) => {
        rotateValue.set(Number(event.currentTarget.value));

            rotate(event.currentTarget.value)
            }}
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            class=" w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0"
            value={$rotateValue}
            min="0"
            required
          />
  </div>
  <div class="relative">
    <div id="div1" class="relative"></div>
    <h6 class="text-center h-full w-full absolute top-[40%]">{$rotateValue}°</h6>
  </div>
</div>

<style>
  #div1 {
    width: 80px;
    height: 80px;
    background-color: #c4c7ca;
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
</style>
