import globals from "globals";
import pluginJs from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import js from "@eslint/js";

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended, // optional unless using "eslint:recommended"
  allConfig: js.configs.all,                 // optional unless using "eslint:all"
});

export default [
  {
    languageOptions: {
      globals: globals.node
    },
    // ...compat.plugins("eslint-config-airbnb"),
    ...compat.extends("standard", "example"),
    ...compat.env({
      es2020: true,
      node: true
    }),
    ...compat.config({
      plugins: ["eslint-config-airbnb"],
      extends: "standard",
      env: {
        es2020: true,
        node: true
      },
      rules: {
        semi: "error"
      }
    }),
  },
  // pluginJs.configs.recommended,
  // pluginJs.configs.all
];