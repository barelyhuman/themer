import path from 'path'
import alias from '@rollup/plugin-alias'
import babelPlugin from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'
import esbuild from 'rollup-plugin-esbuild'
import {terser} from 'rollup-plugin-terser'
const createBabelConfig = require('./babel.config')

const extensions = ['.js', '.ts', '.tsx']
const {root} = path.parse(process.cwd())

function external(id) {
	return !id.startsWith('.') && !id.startsWith(root)
}

function getBabelOptions(targets) {
	return {
		...createBabelConfig({env: env => env === 'build'}, targets),
		extensions,
		comments: false,
		babelHelpers: 'bundled',
	}
}

function getEsbuild(target, env = 'development') {
	return esbuild({
		minify: env === 'production',
		target,
		tsconfig: path.resolve('./tsconfig.json'),
	})
}

function createDeclarationConfig(input, output) {
	return {
		input,
		output: {
			dir: output,
		},
		external,
		plugins: [
			typescript({
				declaration: true,
				emitDeclarationOnly: true,
				outDir: output,
			}),
		],
	}
}

function createESMConfig(input, output) {
	return {
		input,
		output: [{file: `${output}.mjs`, format: 'esm'}],
		external,
		plugins: [
			alias({
				entries: {
					'./vanilla': 'valtio/vanilla',
					'../vanilla': 'valtio/vanilla',
				},
			}),
			resolve({extensions}),
			replace({
				__DEV__: '(import.meta.env&&import.meta.env.MODE)!=="production"',
				// a workround for #410
				'use-sync-external-store/shim': 'use-sync-external-store/shim/index.js',
				delimiters: ['\\b', '\\b(?!(\\.|/))'],
				preventAssignment: true,
			}),
			getEsbuild('node14'),
		],
	}
}

function createCommonJSConfig(input, output) {
	return {
		input,
		output: {file: `${output}.cjs`, format: 'cjs', exports: 'named'},
		external,
		plugins: [
			alias({
				entries: {
					'./vanilla': 'valtio/vanilla',
					'../vanilla': 'valtio/vanilla',
				},
			}),
			resolve({extensions}),
			replace({
				__DEV__: 'process.env.NODE_ENV!=="production"',
				preventAssignment: true,
			}),
			babelPlugin(getBabelOptions({ie: 11})),
		],
	}
}

function createUMDConfig(input, output, env) {
	return {
		input,
		output: {
			file: `${output}.${env}.js`,
			format: 'umd',
			exports: 'named',
			name: 'themer',
		},
		external,
		plugins: [
			alias({
				entries: {
					'./vanilla': 'valtio/vanilla',
					'../vanilla': 'valtio/vanilla',
				},
			}),
			resolve({extensions}),
			replace({
				__DEV__: env !== 'production' ? 'true' : 'false',
				preventAssignment: true,
			}),
			babelPlugin(getBabelOptions({ie: 11})),
			...(env === 'production' ? [terser()] : []),
		],
	}
}

function createSystemConfig(input, output, env) {
	return {
		input,
		output: {
			file: `${output}.${env}.js`,
			format: 'system',
			exports: 'named',
		},
		external,
		plugins: [
			alias({
				entries: {
					'./vanilla': 'valtio/vanilla',
					'../vanilla': 'valtio/vanilla',
				},
			}),
			resolve({extensions}),
			replace({
				__DEV__: env !== 'production' ? 'true' : 'false',
				preventAssignment: true,
			}),
			getEsbuild('node14', env),
		],
	}
}

export default function (args) {
	let c = Object.keys(args).find(key => key.startsWith('config-'))
	if (c) {
		c = c.slice('config-'.length).replace(/_/g, '/')
	} else {
		c = 'index'
	}
	return [
		...(c === 'index' ? [createDeclarationConfig(`src/${c}.ts`, 'dist')] : []),
		createCommonJSConfig(`src/index.ts`, `dist/${c}`),
		createESMConfig(`src/${c}.ts`, `dist/${c}`),
		createUMDConfig(`src/${c}.ts`, `dist/${c}`, 'browser'),
	]
}
