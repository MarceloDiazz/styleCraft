<script lang="ts">
  import { ImageStatus } from "../types.d";
  import { Cloudinary } from "@cloudinary/url-gen";
  import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
  import { imageStatus, modifiedImage, originalImage } from "./store";
  import Dropzone from "dropzone";
  import "dropzone/dist/dropzone.css";
  import { onMount } from "svelte";

  // INSTANCIA PARA LA NUEVA VERSION DE LA IMAGEN
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "damqc7a4z",
    },
    url: {
      secure: true,
    },
  });

  onMount(() => {
    // #inicializaciamos el id, el mismo que el form
    const dropzone = new Dropzone("#dropzone", {
      uploadMultiple: false,
      acceptedFiles: ".jpg, .png, .webp",
      maxFiles: 1,
    });
    // Evento, escuchar cuando se envie el archivo
    dropzone.on("sending", (file, xhr, formData) => {
      // Aquí podemos añadir la apiKey, configuración
      formData.append("upload_preset", "m2ynFlutter");
      formData.append("timestamp", `${Date.now() / 1000}`);
      formData.append("api_key", "756588879722754");
      imageStatus.set(ImageStatus.UPLOADING);
    });

    dropzone.on("success", (file, response: any) => {
      const { public_id: publicId, secure_url: url } = response;
      imageStatus.set(ImageStatus.DONE);
      originalImage.set(url);
      // Crear la imagen con fondo transparente
      // y guardar en el backgroundImage
      const imageWithoutBackground = cloudinary
        .image(publicId)
        .effect(backgroundRemoval());
      imageStatus.set(ImageStatus.DONE);
      // modifiedImage.set(imageWithoutBackground.toURL())
    });

    // No esta hecho pero pensar para informarle al usuario
    dropzone.on("error", (file, response) => {
      console.log(response);
      console.log("HA IDO MAL");
    });
  });
</script>

<!-- action: hace el POST para que se suba la imagen -->
<form
  id="dropzone"
  class=" relative overflow-hidden shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col"
  action="https://api.cloudinary.com/v1_1/damqc7a4z/image/upload"
>
  <!-- EL SIGNO DOLAR SIGNIFICA QUE ESTA ESCUCHANDO LOS CAMBIOS DE IMAGESTATUS -->
  <!-- {
  #if $imageStatus === ImageStatus.READY 
}  -->
  <button
    class="
    font-bold
    pointer-events-none bg-blue-600 rounded-full text-bold text-white tex-xl px-6 py-4"
  >
    Upload files
  </button>
  <strong class="text-lg mt-4 text-gray-800"> or drop a file </strong>
  <!-- {/if} -->
  <!-- {#if $imageStatus === ImageStatus.UPLOADING} -->
  

<div class="absolute w-full h-full bg-red-50 flex justify-center items-center opacity-50">
  <div role="status">
      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
      <span class="sr-only">Loading...</span>
  </div>
</div>

  <!-- {/if} -->
</form>
