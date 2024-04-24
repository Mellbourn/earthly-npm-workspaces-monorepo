import typescript from '@rollup/plugin-typescript';

// rollup.config.mjs
export default [ {
	input: 'src/components/index.ts',
	output: {
		file: 'dist/index.mjs',
		format: 'es',
	},
	
	plugins: [typescript()]
}
,
{
	input: 'src/components/index.ts',
	output: {
		file: 'dist/index.cjs',
		format: 'cjs',
	},
	
	plugins: [typescript()]
}];