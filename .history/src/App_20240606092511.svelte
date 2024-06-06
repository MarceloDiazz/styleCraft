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

<button
  data-drawer-target="default-sidebar"
  data-drawer-toggle="default-sidebar"
  aria-controls="default-sidebar"
  type="button"
  class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
>
  <span class="sr-only">Open sidebar</span>
  <svg
    class="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clip-rule="evenodd"
      fill-rule="evenodd"
      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    ></path>
  </svg>
</button>


<Sidebar/>
<div class="sm:ml-64">
  <div
    class="max-w-sm m-auto grid gap-5 grid-cols-1 place-content-center w-full h-screen p-4"
  >
  <!-- intro -->
    <div>
      <div class="flex justify-center items-center ps-2.5 mb-5" title="bird icons ">
        <img src={logo} class=" me-3 sm:h-15" alt="Flowbite Logo" />
        <span
          class="text-6xl font-bold text-blue-900 tracking-tighter whitespace-nowrap self-center"
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
    <footer
      class="flex justify-center items-center gap-x-2 font-semibold pt-10"
    >
      <a href="https//:cloudinary" target="_blank" rel="noreferrer"
        ><CloudinaryLogo /></a
      >
    </footer>
  </div>
</div>

