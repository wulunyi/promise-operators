import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: ['lodash'],
  plugins: [ 
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};