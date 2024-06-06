import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-node';  
const config = {  

	preprocess: [  
		vitePreprocess({ 
			postcss: true
		})  
	],
}
export default config; 