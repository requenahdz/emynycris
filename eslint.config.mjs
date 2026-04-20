import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default defineConfig([
  ...astro.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": tsPlugin,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", ".next/**", "app/**"],
  },
]);
