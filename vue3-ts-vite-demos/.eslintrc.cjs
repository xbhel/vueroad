// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  // 插件列表，插件名称可以省略 'eslint-plugin-' 前缀
  // eslint 在加载时会自动获取 'eslint-plugin-${plugin-name}'
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      // 针对 js,jsx,ts,tsx,vue 规则配置
      files: ['*.{js,jsx,ts,tsx,vue}'],
      rules: {},
    },
  ],
  // 全局规则配置
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    'no-undef': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
});
