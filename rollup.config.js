import typescript2 from 'rollup-plugin-typescript2';
import loadz0r from 'rollup-plugin-loadz0r';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: ['src/bootstrap.ts'],
  output: {
    format: 'amd',
    dir: '_site/js'
  },
  plugins: [
    nodeResolve(),
    typescript2(),
    loadz0r({
      publicPath: '/js'
    })
  ]
};
