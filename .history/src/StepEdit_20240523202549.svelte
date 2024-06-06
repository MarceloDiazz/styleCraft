<script lang="ts">
  import "two-up-element";
  import { originalImage, modifiedImage, buttonSelected, saveButtonEnabled } from "./store";
  import BlurOption from "./components/BlurOption.svelte";
  import RoundedOption from "./components/RoundedOption.svelte";
  import RotateOption from "./components/RotateOption.svelte";
  import AddBackgroundOption from "./components/AddBackgroundOption.svelte";
  
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
<div class="">
  <two-up>
    <img  src={$originalImage} alt="Imagen original subida por el usuario" />
    {#if processingImage}
      <div class="flex flex-col justify-center items-center">
        <div class="lds-ripple">
          <div />
          <div />
        </div>
        <p class="text-center mt-4">Procesando Imagen ...</p>
      </div>
    {:else}
      <img  src={$modifiedImage} alt="Imagen sin fondo subida por el usuario" />
    {/if}
  </two-up>
</div>
{#if $buttonSelected.buttonBlur}
  <BlurOption />
{/if}
{#if $buttonSelected.buttonRounded}
  <RoundedOption />
{/if}
{#if $buttonSelected.buttonRotate}
  <RotateOption />
{/if}
{#if $buttonSelected.buttonBackground}
  <AddBackgroundOption />
{/if}
{#if $saveButtonEnabled}
  <button
    on:click={() => {
      // transformImage();
    }}
    type="button"
    class="text-white bg-[#009c8c] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full max-w-32"
    >Transformar</button
  >
{/if}


<!-- <a
  download
  href={$modifiedImage}
  class="block text-center bg-blue-500 text-xl hover:bg-blue-700 w-full font-bold text-white rounded-full px-4 py-2 mt-10"
>
  Descargar Imagen sin fondo
</a> -->
