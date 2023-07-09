import useViteConfig from './vite.config';
import { UserConfigFn, defineConfig } from 'vitest/config';

export default defineConfig((env) => {
  const viteConfig = (useViteConfig as UserConfigFn)(env);
  return {
    ...viteConfig,
    test: {
      globals: true,
      include: [
        '**/__tests__/**/*.?(c|m)[jt]s?(x)',
        '**/?(*.){test,spec}.?(c|m)[jt]s?(x)',
      ],
    },
  };
});
