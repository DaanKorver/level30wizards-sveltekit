const svgConfig = {
	includePaths: ['./src/lib/icons/', './src/assets/icons/'],
	svgoOptions: {
		multipass: true,
		plugins: [
			{
				name: 'preset-default',
				// by default svgo removes the viewBox which prevents svg icons from scaling
				// not a good idea! https://github.com/svg/svgo/pull/1461
				params: { overrides: { removeViewBox: false } }
			},
			{ name: 'removeAttrs', params: { attrs: '(stroke)' } }
		]
	}
};

export { svgConfig };
