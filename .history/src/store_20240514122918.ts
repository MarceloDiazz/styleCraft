// ESTADOs GLOBALES


import {writable} from "svelte/store"
import {ImageStatus} from "../types.d"


// ESTADO POR DEFECTO ESTA READY
export const imageStatus = writable(ImageStatus.READY)
export const originalImage = writable("")
export const modifiedImage = writable("")
export const tokenImage = writable("")
export const buttonSelected = writable({
    buttonRemove: false,
    buttonRestore: false,
    buttonBlur: false,
    buttonRounded: false,
    buttonRotate: false,
    buttonBackground: false,
})
export const saveButtonEnabled= writable(false)


// Blur section 
export const rangeStrength = writable(500);
export const selectedBlurOption = writable("e_blur:");



// export const buttonRemoveSelected = writable(false)
// export const buttonRestoreSelected = writable(false)
// export const buttonBlurSelected = writable(false)
// export const buttonRoundedSelected = writable(false)
// export const buttonRotateSelected = writable(false)
// export const buttonBackgroundSelected = writable(false)




