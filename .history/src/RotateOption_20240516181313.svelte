<script lang="ts">

</script>
<div>
    <input
    on:change={(event) => {
    console.log(event.currentTarget.value);
    }}
    id="steps-range"
    type="range"
    min="-360"
    max="360"
    value="0"
    step="0"
    class=" h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
    />
</div>
