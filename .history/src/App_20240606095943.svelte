<script lang="ts">
  import { ImageStatus } from "../types.d";
  import logo from "./assets/img/origami.png";
  import demo from "./assets/img/demo.jpg";

  import CloudinaryLogo from "./CloudinaryLogo.svelte";
  import StepUpload from "./StepUpload.svelte";
  import { imageStatus, buttonSelected } from "./store";
  import StepEdit from "./StepEdit.svelte";
  import Sidebar from "./components/Sidebar.svelte";

</script>

<Sidebar/>
<div >
  <div
    class="max-w-sm m-auto grid gap-5 grid-cols-1 place-content-center w-full h-screen p-4 sm:p-10"
  >
    <div>
      <div class="flex justify-center items-center ps-2.5 mb-5" title="bird icons ">
        <img src={logo} class=" me-3 sm:h-15" alt="Flowbite Logo" />
        <span
          class="text-5xl font-bold text-blue-900 tracking-tighter whitespace-nowrap self-center"
        >
          Style<span class="text-blue-600">Craft</span>
        </span>
      </div>
      {#if $imageStatus === ImageStatus.READY}
        <div>
          <img src={demo}/>
      </div>
      {/if}
    </div>
    <main>
      {#if $imageStatus === ImageStatus.READY || $imageStatus === ImageStatus.UPLOADING}
        <StepUpload />
      {:else if $imageStatus === ImageStatus.DONE}
        <StepEdit />
      {/if}
    </main>
  </div>
</div>

