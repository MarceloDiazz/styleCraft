<script lang="ts">
  import "two-up-element";
  import { Cloudinary } from "@cloudinary/url-gen";
  import {
    backgroundRemoval,
    generativeRestore,
    blur,
  } from "@cloudinary/url-gen/actions/effect";
  import {
    imageStatus,
    modifiedImage,
    originalImage,
    buttonSelected,
    selectedBlurOption,
    rangeStrength,
    tokenImage,
    saveButtonEnabled,
    selectedRoundedOption,
    radiusValue,
    rotateValue,
    selectModeBackground,
    selectTypeImageBackground,
    selectColorBackground,
    readyImage,
  } from "./store";
  import "dropzone/dist/dropzone.css";
  import { faces } from "@cloudinary/url-gen/qualifiers/region";
  import { auto, pad } from "@cloudinary/url-gen/actions/resize";
  import { ar1X1 } from "@cloudinary/url-gen/qualifiers/aspectRatio";
  import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
  import { byRadius, max } from "@cloudinary/url-gen/actions/roundCorners";
  import BlurOption from "./components/BlurOption.svelte";
  import RoundedOption from "./components/RoundedOption.svelte";
  import RotateOption from "./components/RotateOption.svelte";
  import AddBackgroundOption from "./components/AddBackgroundOption.svelte";
  import { byAngle } from "@cloudinary/url-gen/actions/rotate";
  import { predominant, generativeFill } from "@cloudinary/url-gen/qualifiers/background";
  import { ImageStatus } from "../types.d";
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
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "damqc7a4z",
    },
    url: {
      secure: true,
    },
  });
  const transformImage = () => {
    if ($buttonSelected.buttonRemove) {
      // Crear la imagen con fondo transparente
      // y guardar en el backgroundImage
      const imageWithoutBackground = cloudinary
        .image($tokenImage)
        .effect(backgroundRemoval());

      modifiedImage.set(imageWithoutBackground.toURL());
    }

    if ($buttonSelected.buttonRestore) {
      const imageRestore = cloudinary
        .image($tokenImage)
        .effect(generativeRestore());
      modifiedImage.set(imageRestore.toURL());
    }

    if ($buttonSelected.buttonBlur) {
      let effectType =
        $selectedBlurOption === "e_blur_faces:"
          ? blur().strength($rangeStrength).region(faces())
          : blur().strength($rangeStrength);
      const imageBlur = cloudinary.image($tokenImage).effect(effectType);
      modifiedImage.set(imageBlur.toURL());
    }

    if ($buttonSelected.buttonRounded) {
      let customValueConverted = $radiusValue.split(",");
      let typeRounded =
        $selectedRoundedOption === "maximunRadius"
          ? max()
          : $selectedRoundedOption === "singleRadius"
            ? byRadius(Number($radiusValue))
            : byRadius(
                Number(customValueConverted[0]),
                Number(customValueConverted[1]),
                Number(customValueConverted[2]),
                Number(customValueConverted[3])
              );
      const imageRounded = cloudinary
        .image($tokenImage)
        .resize(auto().width(500).aspectRatio(ar1X1()).gravity(autoGravity()))
        .roundCorners(typeRounded);

      modifiedImage.set(imageRounded.toURL());
    }

    if ($buttonSelected.buttonRotate) {
      const imageRotate = cloudinary
        .image($tokenImage)
        .rotate(byAngle($rotateValue));
      modifiedImage.set(imageRotate.toURL());
    }

    if ($buttonSelected.buttonBackground) {
      let modeImage= $selectModeBackground === "predominant" ? predominant() : generativeFill()
      if($selectTypeImageBackground === "noTransparent"){
        const imageBackground = cloudinary
          .image($tokenImage)
          .resize(pad().width(1800).height(1800).background(modeImage));
          modifiedImage.set(imageBackground.toURL());
      } else{
        console.log($selectColorBackground);
        
        const imageBackgroundTransparent = cloudinary
          .image($tokenImage)
          .backgroundColor($selectColorBackground)
          modifiedImage.set(imageBackgroundTransparent.toURL());
      }
    }
    readyImage.set(true)
  };
</script>

<!-- on: como el onclick  -->
<div class="">
  {#if $readyImage === false}
<img  src={$originalImage} alt="Imagen original subida por el usuario" />
{:else}
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

{#if $readyImage}
<a
  download
  href={$modifiedImage}
  class="block text-center bg-blue-500 text-lg hover:bg-blue-700 w-full font-bold text-white rounded-full px-4 py-2 mt-10"
>
  Descargar Imagen
</a>
{/if}
{/if}
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
{#if $saveButtonEnabled && Object.values($buttonSelected).some((el)=> el === true)}
<div class="mt-5">
  <button
    on:click={() => {
      transformImage();
    }}
    type="button"
    class="text-white bg-[#009c8c] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full max-w-32"
    >Transformar</button
  >
</div>
{/if}
{#if Object.values($buttonSelected).every((el)=> el === false)}
<div>
  <span class="font-bold">
    Select the effect for your image</span>
</div>
{/if}



