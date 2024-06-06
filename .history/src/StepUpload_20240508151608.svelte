<script lang="ts">
  import {ImageStatus} from "../types.d"
  import {imageStatus, originalImage} from "./store"
  import Dropzone, { UPLOADING } from "dropzone";
  import "dropzone/dist/dropzone.css";
  import { onMount } from "svelte";

  onMount(() => {
    // #inicializaciamos el id, el mismo que el form
    const dropzone = new Dropzone("#dropzone", {
      uploadMultiple: false,
      acceptedFiles:".jpg, .png, .webp",
      maxFiles: 1,
    });
    // Evento, escuchar cuando se envie el archivo
    dropzone.on("sending", (file, xhr, formData)=>{
        // Aquí podemos añadir la apiKey, configuración
        formData.append("upload_preset", "m2ynFlutter")
        formData.append("timestamp", `${(Date.now() / 1000)}`)
        formData.append("api_key", "756588879722754")
    })

    dropzone.on("success", (file, response:any)=>{
        const {secure_url: url} = response
        imageStatus.set(ImageStatus.DONE)
        originalImage.set(url)


        // Crear la imagen con fondo transparente
        // y guardar en el backgroundImage
        console.log(response);
    })

    // No esta hecho pero pensar para informarle al usuario
    dropzone.on("error", (file, response)=>{
        console.log(response);
        console.log("HA IDO MAL");
    })
  });
</script>

<!-- action: hace el POST para que se suba la imagen -->
<form
  id="dropzone"
  class="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col"
  
  action="https://api.cloudinary.com/v1_1/damqc7a4z/image/upload"
>
<!-- EL SIGNO DOLAR SIGNIFICA QUE ESTA ESCUCHANDO LOS CAMBIOS DE IMAGESTATUS -->
{
  #if $imageStatus === ImageStatus.READY 
} 
  <button
    class="
    font-bold
    pointer-events-none bg-blue-600 rounded-full text-bold text-white tex-xl px-6 py-4"
  >
    Upload files
  </button>
  <strong class="text-lg mt-4 text-gray-800 ">
    or drop a file
  </strong>
  {/if}
  {#if $imageStatus === ImageStatus.UPLOADING}
  <strong class="text-lg mt-4 text-gray-800 ">
    Uploading files
  </strong>
  {/if}
</form>
