// ESTADOs GLOBALES


import {writable} from "svelte/store"
import {ImageStatus} from "../types.d"


// ESTADO POR DEFECTO ESTA READY
export const imageStatus = writable(ImageStatus.READY)
export const originalImage = writable("")
export const modifiedImage = writable("")