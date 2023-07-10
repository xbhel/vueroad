import { resolve } from 'path';
import { loadEnv } from 'vite';
import { defineConfig } from 'vite';
import { getEnvs } from './build/utils';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const viteEnv = loadEnv(mode, root);
  const { VITE_PORT, VITE_CLEAR_CONSOLE, VITE_PUBLIC_PATH } = getEnvs(viteEnv);

  return {
    root,
    base: VITE_PUBLIC_PATH,
    server: {
      port: VITE_PORT,
      // 监听所有地址，包括 LAN 和 public address.
      host: true,
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolvePath('src'),
        },
        {
          find: '#',
          replacement: resolvePath('typings'),
        },
      ],
    },
    plugins: [
      vue(),
      // 按需自动导入组件插件
      Components({
        // 自定义的组件目录，该目录下的组件都会自动导入
        dirs: ['src/components'],
        // 生成的自动导入组件声明文件的位置
        dts: 'typings/components.d.ts',
        // 自动导入 ant-design-vue 组件
        // 默认自动导入样式，设置 importStyle 为 false 表示无需导入样式
        resolvers: [AntDesignVueResolver({ importStyle: false })],
      }),
      // 按需自动导入 API 插件
      AutoImport({
        // 自动导入 vue 的 API
        imports: ['vue'],
        // 生成的自动导入 API 声明文件的位置
        dts: 'typings/auto-import.d.ts',
      }),
    ],
    esbuild: {
      pure: VITE_CLEAR_CONSOLE ? ['console.log', 'debugger'] : [],
    },
    optimizeDeps: {
      include: ['@vue/runtime-core'],
    },
  };
});

function resolvePath(...path: string[]) {
  return resolve(process.cwd(), ...path);
}
