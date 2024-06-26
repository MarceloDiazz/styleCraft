<script lang="ts">
import {modifiedImage} from "../store"

async function descargarImagen(url: string, nombreArchivo: string) {
  try {
    // Hacer la solicitud GET usando fetch
    const respuesta = await fetch(url);
    
    // Verificar si la solicitud fue exitosa
    if (!respuesta.ok) {
      throw new Error('No se pudo descargar la imagen');
    }
    
    // Convertir la respuesta a un blob
    const blob = await respuesta.blob();
    
    // Crear un objeto URL temporal para el blob
    const blobURL = window.URL.createObjectURL(blob);
    
    // Crear un elemento <a> temporal
    const link = document.createElement('a');
    link.href = blobURL;
    link.setAttribute('download', nombreArchivo);
    
    // Simular clic en el enlace
    const clicEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false
    });
    link.dispatchEvent(clicEvent);
    
    // Liberar el objeto URL
    window.URL.revokeObjectURL(blobURL);
  } catch (error) {
    console.error('Error al descargar la imagen:', error);
  }
}
</script>


<button class="bg-blue-500 mt-3 p-2 rounded-md text-white font-bold " on:click={()=>{descargarImagen($modifiedImage, 'styleCraf-result')}}>Download image</button>