import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-node';  
const config = {  

	preprocess: [  
		vitePreprocess({ 
			postcss: true
		})  
	],
	kit: {  
		adapter: adapter({  
			precompress: true,  
		})  
	}  
}
export default config; 