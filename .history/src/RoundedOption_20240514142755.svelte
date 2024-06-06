
<script lang="ts">

</script>

<div class="mt-10">
    <form class="flex-1">
        <label
          for="modeBlur"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Modo:</label
        >
        <select
          on:click={(event) => {
            // selectedBlurOption.set(event.currentTarget.value);
          }}
          id="modeBlur"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="e_blur:">Regular</option>
          <option value="e_blur_faces:">Rostro</option>
        </select>
      </form>

</div>