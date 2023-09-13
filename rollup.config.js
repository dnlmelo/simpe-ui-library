import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from '@rollup/plugin-image';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: ["./src/index.ts"],
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    plugins: [
      image(),
      peerDepsExternal(),
      resolve(),
      postcss(),
      commonjs(),
      typescript(),
      terser(), 
    ],
    external: ["react", "react-dom"],
  },
];
