<script lang="ts">
    
import "two-up-element"
import {originalImage, modifiedImage } from "./store"

let processingImage= true 
let tries= 0
let intervalId= 0
// ALGO PARECIDO A UN USEEFFECT
$: {
    if(processingImage){
        clearInterval(intervalId)
        intervalId = setInterval(()=>{
            tries++
        }, 500)
    }
}
</script>

<!-- on: como el onclick  -->
<two-up>
    <img src={$originalImage} alt="Imagen original subida por el usuario"/>
    <img 
    on:load={()=>{
        processingImage = false
    }}
    on:error={()=>{
        processingImage= true
    }}
    src={`${$modifiedImage}&t=${tries}`} 
    alt="Imagen sin fondo subida por el usuario"
    />  
</two-up>


<a download href={$modifiedImage} class="block text-center bg-blue-500 text-xl hover:bg-blue-700  w-full font-bold text-white rounded-full px-4 py-2 mt-10">
    Descargar Imagen sin fondo
</a>