<script lang="ts">
  import { selectTypeImage, selectColorBackground } from "../store";
</script>

<div class="mt-10 flex justify-around gap-20">
  <div>
    <label
      for="modeBlur"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Tipo de imágen:</label
    >
    <div class="flex flex-col gap-5 mt-5">
      <button
        on:click={() => {
          selectTypeImage.set("noTransparent");
        }}
        class="border rounded-xl p-3 border-gray-200">Con fondo</button
      >
      <button
        on:click={() => {
          selectTypeImage.set("transparent");
        }}
        class="border rounded-xl p-3 border-gray-200">Sin fondo</button
      >
    </div>
  </div>
  {#if $selectTypeImage === "noTransparent"}
    <div>
      <label
        for="modeBlur"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Modo:</label
      >
      <div class="flex flex-col gap-5 mt-5">
        <!-- predominant -->
        <button class="border rounded-xl p-3 border-gray-200"
          >Predominante color</button
        >
        <!-- generativeFill -->
        <button class="border rounded-xl p-3 border-gray-200"
          >Relleno generativo</button
        >
      </div>
    </div>
  {/if}
  {#if $selectTypeImage === "transparent"}
    <div>
      <label
        for="modeBlur"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Color:</label
      >
      <div class="flex relative items-center">
        <span class="bg-gray-400  w-5 text-center text-xl text-white">
            #
        </span>
        <input
        class=" border-red-700"
          on:change={(event) => {
            selectColorBackground.set(event.currentTarget.value)
            console.log("a");
          }}
          type="text"
          value={$selectColorBackground}
        />
        <input
         class="w-7  bg-transparent cursor-pointer  absolute right-0 border-none "
          on:change={(event) => {
                       selectColorBackground.set(event.currentTarget.value)

          }}
          type="color"
          value={$selectColorBackground}
        />
      </div>
    </div>
  {/if}
</div>
