<script lang="ts">
  import CloudinaryLogo from "./CloudinaryLogo.svelte";
  import StepUpload from "./StepUpload.svelte";
</script>

<div class="max-w-xl m-auto grid grid-cols-1 place-content-center w-full h-screen">
  <header class="flex justify-center py-10">
    <h1 class="text-3xl font-bold text-blue-900 tracking-tighter">remove<span class="text-blue-600">bg</span></h1>
  </header>
  <main>
<StepUpload/>
  </main>
  <footer class="flex justify-center items-center gap-x-2 font-semibold pt-10">
    Hecho con <a href="https//:cloudinary" target="_blank" rel="noreferrer"
      ><CloudinaryLogo /></a
    >
  </footer>
</div>
