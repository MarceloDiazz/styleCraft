<script lang="ts">
  import { rotateValue } from "./store";

function rotate(value:any) {

let selectedDiv= document.getElementById('div1')!
  selectedDiv.style.webkitTransform="rotate(" + value + "deg)";
  selectedDiv.style.transform="rotate(" + value + "deg)";
  document.getElementById('span1')!.innerHTML=value + "deg";
}

</script>

<p>Rotate the yellow div element:</p>

<div id="div1">HELLO</div>

Rotate: <br>
<input type="range" min="-360" max="360" value={$rotateValue}  
on:change={(event)=>{
    rotateValue.set(Number(event.currentTarget.value))
    rotate(event.currentTarget.value)
    }} /><br>
transform: rotate(<span id="span1">{$rotateValue}</span>);


<style>
    #div1 {
  width:120px;
  height:100px;
  background-color:yellow;
  border:1px solid black;
  transform:rotate(7deg);
  -ms-transform:rotate(7deg);
  -webkit-transform:rotate(7deg);
}

</style>