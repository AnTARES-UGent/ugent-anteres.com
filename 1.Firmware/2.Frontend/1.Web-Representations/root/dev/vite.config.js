import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/root', 
  resolve: {
    alias: [
      {
        find: '/global', replacement: path.resolve(__dirname, '../../global'),
      },
      {
        find: '/assets', replacement: path.resolve(__dirname, '/root/assets'),
      }
  ],
  },
  server: {
    fs: {
      allow: ['../../'],
    },
  },
});
