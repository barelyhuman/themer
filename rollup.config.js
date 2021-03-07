export default [
  {
    input: './src/index.js',
    output: { file: './dist/index.umd.js', format: 'umd', name: 'Themer' },
  },
  {
    input: './src/index.js',
    output: { file: './dist/index.esm.js', format: 'esm', name: 'Themer' },
  },
];
