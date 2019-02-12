import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

// Transpile/polyfill with reasonable browser support
export default {
  input: 'src/index.js', // Path relative to package.json
  output: {
    name: 'VueNotificationRenderless',
    exports: 'named',
    globals: {
      vue: 'Vue'
    },
    minify: true
  },
  external: ['vue'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true // Explicitly convert template to render function
    }),
    buble({
      objectAssign: 'Object.assign'
    }) // Transpile to ES5
  ]
};
