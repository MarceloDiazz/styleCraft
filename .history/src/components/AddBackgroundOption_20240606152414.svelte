<script lang="ts">
  import { selectTypeImageBackground, selectModeBackground, selectColorBackground } from "../store";
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
          selectTypeImageBackground.set("noTransparent");
        }}
        class={`border rounded-xl p-3 ${$selectTypeImageBackground === "noTransparent" ? "border-blue-400" : "border-gray-200"}`}
        >Con fondo</button
      >
      <button
        on:click={() => {
          selectTypeImageBackground.set("transparent");
        }}
        class={`border rounded-xl p-3 ${$selectTypeImageBackground === "transparent" ? "border-blue-400" : "border-gray-200"}`}
        >Sin fondo</button
      >
    </div>
  </div>
  {#if $selectTypeImageBackground === "noTransparent"}
    <div>
      <label
        for="modeBlur"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Modo:</label
      >
      <div class="flex flex-col gap-5 mt-5">
        <!-- predominant -->
        <button
            on:click={()=>{
                selectModeBackground.set("predominant")
            }}
          class={`border rounded-xl p-3  ${$selectModeBackground === "predominant" ? "border-blue-500" : "border-gray-200"}`}
          >Predominante color</button
        >
        <!-- generativeFill -->
        <button
            on:click={()=>{
                selectModeBackground.set("generativeFill")
            }}
          class={`border rounded-xl p-3  ${$selectModeBackground === "generativeFill" ? "border-blue-500" : "border-gray-200"}`}
          >Relleno generativo</button
        >
      </div>
    </div>
  {/if}
  {#if $selectTypeImageBackground === "transparent"}
    <div>
      <label
        for="modeBlur"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Color:</label
      >
      <div class="flex relative items-center gap-1 align-middle">
        <input
          class="w-10 bg-transparent cursor-pointer border-none"
          on:change={(event) => {
            selectColorBackground.set(event.currentTarget.value);
          }}
          type="color"
          value={$selectColorBackground}
        />
      </div>
    </div>
  {/if}
</div>
