<script lang="ts">
  import Dropzone from "dropzone";
  import "dropzone/dist/dropzone.css";
  import { onMount } from "svelte";

  onMount(() => {
    const dropzone = new Dropzone("#dropzone", {
      uploadMultiple: false,
      acceptedFiles:".jpg, .png, .webp",
      maxFiles: 1,
    });
  });
</script>

<form
  id="dropzone"
  class="shadow-2xl border-dashed border-2 border-gray-300 rounded-lg aspect-video w-full flex items-center justify-center flex-col"
  action="https://res.cloudinary.com/damqc7a4z/image/upload"
>
  <button
    class="pointer-events-none bg-blue-600 rounded-full text-bold text-white tex-xl px-6 py-4"
  >
    Upload files
  </button>
</form>
