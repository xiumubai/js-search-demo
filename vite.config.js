/*
 * @Author: 朽木白
 * @Date: 2022-08-10 11:11:04
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-08-15 14:01:43
 * @Description:
 */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      // default
      supportTs: false,
      logger: true,
      mockPath: './mock/',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: generateModifyVars(),
        javascriptEnabled: true,
      },
    },
  },
});
