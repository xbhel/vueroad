# vue3-ts-vite-template

👋 这是一个基于 [Vue3](https://vuejs.org/)、[TypeScript](https://www.typescriptlang.org/)、[Vite](https://vitejs.dev/)、[Ant-Design-Vue](https://antdv.com/docs/vue/introduce) 的模板，集成了一些常用插件和库。

## 集成

1. vscode、[volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)、take over 模式。
2. vite、ts、vue3。
3. 集成 prettier 用于代码格式化。
4. 集成 eslint 作为静态代码分析。
5. 集成 less 用于 css 拓展。
6. 集成 ant-design-vue 作为 UI 库。
7. 集成 unplugin-auto-import 用于 vue 等 API 按需自动导入。
8. 集成 unplugin-vue-components 用于 UI 组件按需自动导入。
9. :lock:集成 lodash、axios、dayjs、vue-use、nprogress 等工具库。
10. 集成 vitest 用于测试。
11. 集成 esno 执行 ts、js 脚本。
12. :lock:vite 多环境配置。
13. :lock:集成 lint-stage 对 git 暂存区(即新增/修改)代码进行 lint。
14. :lock:集成 cross-env 进行交叉环境变量编译。
15. :lock:集成 commitizen 规范团队中代码提交消息的风格。
16. :lock:集成 stylelint 对 css 及拓展进行静态代码分析。
17. :lock:集成 husky 对 git hooks 进行增强，以检验提交信息、运行测试、代码分析等。
18. :lock:集成 vue-router 进行路由管理。
19. :lock:集成 pinia 进行状态管理。
20. :lock:集成 vue-i18n 以支持国际化。
21. :lock:集成 tailwindcss/unocss 实用的 css 工具集框架。
22. :lock:集成加/解密模块。

## Use

1. 拷贝此模板作为基础项目创建 vue3-ts-vite-demos，不拷贝 node_modules 目录：

```bash
./scripts/cpi.sh vue3-ts-vite-template/ vue3-ts-vite-demos node_modules
```

## directory

- .browserslistrc 配置浏览器兼容
