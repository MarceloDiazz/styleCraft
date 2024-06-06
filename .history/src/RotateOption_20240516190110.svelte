<script lang="ts">
  import { rotateValue } from "./store";

function rotate(value:any) {

let selectedDiv= document.getElementById('div1')!
  selectedDiv.style.webkitTransform="rotate(" + value + "deg)";
  selectedDiv.style.transform="rotate(" + value + "deg)";
  document.getElementById('span1')!.innerHTML=value + "deg";
}

</script>


<div id="div1"></div>

<input type="range" min="-360" max="360" value={$rotateValue}  
on:change={(event)=>{
    rotateValue.set(Number(event.currentTarget.value))
    rotate(event.currentTarget.value)
    }} /><br>
transform: rotate(<span id="span1">{$rotateValue}</span>);


<style>
    #div1 {
  width:50px;
  height:50px;
  background-color:yellow;
  border:1px solid black;
  transform:rotate(0deg);
  -ms-transform:rotate(0deg);
  -webkit-transform:rotate(0deg);
}

</style>