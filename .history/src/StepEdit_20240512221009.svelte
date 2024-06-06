<script lang="ts">
  import "two-up-element";
  import { originalImage, modifiedImage, buttonSelected } from "./store";
  import { writable } from "svelte/store";
  const rangeValue = writable(500);

  let processingImage = true;
  let tries = 0;
  let intervalId = 0;
  // ALGO PARECIDO A UN USEEFFECT
  $: {
    if (processingImage) {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        tries++;
        const img = new Image();
        img.src = $modifiedImage;
        img.onload = () => {
          processingImage = false;
          clearInterval(intervalId);
        };
      }, 500);
    }
  }
</script>

<!-- on: como el onclick  -->
<two-up>
  <img src={$originalImage} alt="Imagen original subida por el usuario" />
  {#if processingImage}
    <div class="flex flex-col justify-center items-center">
      <div class="lds-ripple">
        <div />
        <div />
      </div>
      <p class="text-center mt-4">Procesando Imagen ...</p>
    </div>
  {:else}
    <img src={$modifiedImage} alt="Imagen sin fondo subida por el usuario" />
  {/if}
</two-up>

{#if $buttonSelected.buttonBlur}
  <div class="flex items-center mt-10">
    <div class="flex-1 max-w-15">
      <div class="flex flex-col gap-2">
        <!-- Step range -->
        <label
          for="steps-range"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Range steps</label
        >
        <input
          on:change={(event) => {
            let range = Number(event.currentTarget.value);
            rangeValue.set(range);
          }}
          id="steps-range"
          type="range"
          min="0"
          max="2000"
          value={$rangeValue}
          step="0"
          class="w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <!-- Value Range -->
        <form class="max-w-sm">
          <label
            for="number-input"
            class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Select a number:</label
          >
          <input
            on:change={(event) => {
              console.log("EE");
              
              let range = Number(event.currentTarget.value);
              rangeValue.set(range);
            }}
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            class="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`${Number($rangeValue)}`}
            value={$rangeValue > 2000 ? 2000 : $rangeValue}
            required
          />
        </form>
      </div>
    </div>
    <div class="flex-1 text-center w-15">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        >Dropdown button <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#/"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Dashboard</a
            >
          </li>
          <li>
            <a
              href="#/"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Settings</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
{/if}
<a
  download
  href={$modifiedImage}
  class="block text-center bg-blue-500 text-xl hover:bg-blue-700 w-full font-bold text-white rounded-full px-4 py-2 mt-10"
>
  Descargar Imagen sin fondo
</a>
