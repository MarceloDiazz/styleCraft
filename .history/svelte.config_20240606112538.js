import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-node';  

const config = {  

	preprocess: [  
		vitePreprocess({ postcss: true })  
	],  
// Pagespeed they told me that i should use text compression
	kit: {  
		adapter: adapter({  
			precompress: true,  
		})  
	}  
};  
export default config;  