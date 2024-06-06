<script lang="ts">
  import { rotateValue } from "./store";

function rotate(value:any) {

let selectedDiv= document.getElementById('div1')!
  selectedDiv.style.webkitTransform="rotate(" + value + "deg)";
  selectedDiv.style.transform="rotate(" + value + "deg)";
  document.getElementById('span1')!.innerHTML=value + "deg";
}

</script>

<div class="flex justify-center items-center gap-5 mt-10 ">
    <div>
        <input type="range" min="-360" max="360" value={$rotateValue}  
        on:change={(event)=>{
            rotateValue.set(Number(event.currentTarget.value))
            rotate(event.currentTarget.value)
        }} /><br>
        transform: rotate(<span id="span1">{$rotateValue}</span>);
    </div>
    <div id="div1">
        <h6 class="text-center h-full mx-auto w-full absolute">{$rotateValue}</h6>
    </div>
</div>


<style>
    #div1 {
  width:80px;
  height:80px;
  background-color:#c4c7ca;
  transform:rotate(0deg);
  -ms-transform:rotate(0deg);
  -webkit-transform:rotate(0deg);
}

</style>