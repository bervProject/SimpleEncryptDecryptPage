const cypress = require("eslint-plugin-cypress");
const vuejsAccessibility = require("eslint-plugin-vuejs-accessibility");
const globals = require("globals");
const pluginVue = require("eslint-plugin-vue");
const { defineConfigWithVueTs, vueTsConfigs } = require("@vue/eslint-config-typescript");

module.exports = defineConfigWithVueTs(
  ...pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  cypress.configs.globals,
  {
    plugins: {
      cypress,
      "vuejs-accessibility": vuejsAccessibility,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      ecmaVersion: 2020,
      parserOptions: {},
    },

    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "vue/multi-word-component-names": "warn",
      "vuejs-accessibility/alt-text": "warn",
      "@typescript-eslint/no-require-imports": "warn"
    },
  },
  {
    files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  }
);
