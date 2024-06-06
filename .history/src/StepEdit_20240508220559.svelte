<script lang="ts">
    
import "two-up-element"
import {originalImage } from "./store"
</script>

<two-up>

    <img src={$originalImage} alt="Imagen original subida por el usuario"/>
    <img src="" alt="Imagen original subida por el usuario"/>  
</two-up>


<a>
    Descargar Imagen
</a>