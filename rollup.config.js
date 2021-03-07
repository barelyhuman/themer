export default [
  {
    input: './src/index.js',
    output: {
      file: './dist/index.umd.js',
      format: 'umd',
      name: 'Themer',
      globals: {
        "feather-icons": 'feather',
      },
    },
    external: ['feather-icons'],
  },
  {
    input: './src/index.js',
    output: {
      file: './dist/index.esm.js',
      format: 'esm',
      name: 'Themer',
    },
    external: ['feather-icons'],
  },
];
