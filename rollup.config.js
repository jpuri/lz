import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import sourcemaps from "rollup-plugin-sourcemaps";

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: "umd",
    name: "shogun-lazysize",
    sourceMap: true
  },
  plugins: [
    uglify(),
    nodeResolve({
      browser: true
    }),
    babel({
      presets: ["@babel/preset-env"],
      exclude: "node_modules/**"
    }),
    commonjs({
      include: "node_modules/**"
    }),
    sourcemaps()
  ]
};

