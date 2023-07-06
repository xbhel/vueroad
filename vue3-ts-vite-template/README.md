# vue3-ts-vite-template

👋 这是一个基于 [Vue3](https://vuejs.org/)、[TypeScript](https://www.typescriptlang.org/)、[Vite](https://vitejs.dev/)、[Ant-Design-Vue](https://antdv.com/docs/vue/introduce) 的模板，集成了一些常用插件和库。

## 集成内容

1. vite、ts、vue3
2. 集成 prettier 用于代码格式化
3. 集成 eslint 作为静态代码分析
4. 集成 less 用于 css 拓展
5. 集成 ant-design-vue 作为 UI 库
6. 集成 unplugin-auto-import 用于 vue 等 API 按需自动导入
7. 集成 unplugin-vue-components 用于 UI 组件按需自动导入
8. 集成 lodash、axios、dayjs、nprogress 等工具库
9. 集成 vitest 用于测试

## Use

1. 拷贝此模板作为基础项目创建 vue3-ts-vite-demos，不拷贝 node_modules 目录：

```bash
./scripts/cpi.sh vue3-ts-vite-template/ vue3-ts-vite-demos node_modules
```

## directory

- .browserslistrc 配置浏览器兼容
