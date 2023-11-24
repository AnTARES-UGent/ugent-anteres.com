import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  base: '/main', 
  resolve: {
    alias: [
      {
        find: '/global', replacement: path.resolve(__dirname, '../../global'),
      },
      {
        find: '/main/assets', replacement: path.resolve(__dirname, 'public/assets'),
      },
    ],
  },
  server: {
    fs: {
      allow: ['../../'],
    },
  },
});
