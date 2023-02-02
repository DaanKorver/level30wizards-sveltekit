import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import seqPreprocessor from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';
import { imagePreprocessor } from 'svimg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: seqPreprocessor([
		vitePreprocess(),
		preprocessThrelte(),
		imagePreprocessor({
			inputDir: 'static/images/',
			outputDir: 'static/images/g',
			srcGenerator: (path) => '/images/g/' + path,
			webp: true,
			avif: true
		})
	]),

	kit: {
		adapter: adapter()
	}
};

export default config;
