<script lang="ts">
  import { writable } from "svelte/store";
  import { imageStatus, modifiedImage, originalImage, rangeStrength, selectedBlurOption, tokenImage } from "./store";
  import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";
  import {blur } from "@cloudinary/url-gen/actions/effect";
  import { faces } from "@cloudinary/url-gen/qualifiers/region";
  import { ImageStatus } from "../types.d";

  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "damqc7a4z",
    },
    url: {
      secure: true,
    },
  });
  const blurTransform = ()=>{
    modifiedImage.set("")
    imageStatus.set(ImageStatus.UPLOADING);
    let effectType= $selectedBlurOption === "e_blur_faces:" ? blur().strength($rangeStrength).region(faces()) : blur().strength($rangeStrength)
        const imageBlur = cloudinary
          .image($tokenImage)
          .effect(effectType);
        imageStatus.set(ImageStatus.DONE);
        modifiedImage.set(imageBlur.toURL())
  }
  
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
  <button 
      
  on:click={
    
    ()=> blurTransform
  }
  type="button" class="text-white bg-[#009c8c] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full max-w-32 ">Transformar</button>