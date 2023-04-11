import { defineConfig } from 'vite';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext',
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@constant': path.resolve(__dirname, 'src/constant'),
      '@mock': path.resolve(__dirname, 'src/mock'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@type': path.resolve(__dirname, 'src/types'),
      '@store': path.resolve(__dirname, 'src/store/index.ts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
});
