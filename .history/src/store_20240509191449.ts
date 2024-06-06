// ESTADOs GLOBALES


import {writable} from "svelte/store"
import {ImageStatus} from "../types.d"


// ESTADO POR DEFECTO ESTA READY
export const imageStatus = writable(ImageStatus.READY)
export const originalImage = writable("")
export const buttonRemoveSelected = writable(false)
export const buttonBlurSelected = writable(false)
export const buttonBackgroundSelected = writable(false)
export const buttonRoundedSelected = writable(false)
export const buttonRotateSelected = writable(false)
export const buttonRestoreSelected = writable(false)
