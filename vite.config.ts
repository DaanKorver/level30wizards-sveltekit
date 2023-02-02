import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { svgConfig } from './svg.config';

import svg from '@poppanator/sveltekit-svg';

const config: UserConfig = {
	plugins: [sveltekit(), svg(svgConfig)]
};

export default config;
