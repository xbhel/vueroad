// 提示 eslint 当前在 node 环境下，否则 eslint 会提示 'module' is not defined.

/* eslint-env node */
module.exports = {
  root: true,
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
  },
  // 插件列表，插件名称可以省略 ‘eslint-plugin-’ 前缀
  // eslint 在加载时会自动获取 ‘eslint-plugin-${plugin-name}’
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  overrides: {
    // 仅针对 .ts,.tsx,.vue 规则配置
    files: ['*.ts', '*.tsx', '.vue'],
    rules: {},
  },
  // 全局规则配置
  rules: {
    'no-var': 'error', // 禁止使用 var
    '@typescript-eslint/no-var-requires': 'off',
  },
};
