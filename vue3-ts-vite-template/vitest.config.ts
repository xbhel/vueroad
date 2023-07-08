import viteConfig from './vite.config';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  ...viteConfig,
  test: {
    globals: true,
    include: [
      '**/__tests__/**/*.?(c|m)[jt]s?(x)',
      '**/?(*.){test,spec}.?(c|m)[jt]s?(x)',
    ],
  },
});
