import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

import serve from 'rollup-plugin-serve'

const local = process.env.LOCAL

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    name: 'main',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true,
    }),
    commonjs(),
    local && serve({
      open: false,
      verbose: false,
      contentBase: ['public', 'dist'],
      host: 'localhost',
      port: 8080,
      // https: {
      //   key: readFileSync('/path/to/server.key'),
      //   cert: readFileSync('/path/to/server.crt'),
      //   ca: readFileSync('/path/to/ca.pem'),
      // },
    }),
  ],
}
