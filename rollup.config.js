import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/VueSelect.vue',
  output: [
    {
      file: 'dist/select.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/select.umd.js',
      format: 'umd',
      name: 'VueSelect'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    vue({
      css: false,
      compileTemplate: true, // Assurez-vous que les templates sont compilés
    }),
    postcss({
      extract: true,
      minimize: true,
      use: ['sass'],
    })
  ],
  external: ['vue']
}
