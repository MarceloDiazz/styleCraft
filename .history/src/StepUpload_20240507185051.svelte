<script lang="ts">
  import Dropzone from "dropzone";
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

    dropzone.on("success", (file, response)=>{
        console.log(response);
        console.log("HA IDO BIEN");
    })

    dropzone.on("error", (file, response)=>{
        console.log(response);
        console.log("HA IDO MAL");
    })
  });
</script>

<form
  id="dropzone"
  class="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col"
  action="https://res.cloudinary.com/v1_1//damqc7a4z/image/upload"
>
  <button
    class="pointer-events-none bg-blue-600 rounded-full text-bold text-white tex-xl px-6 py-4"
  >
    Upload files
  </button>
</form>
