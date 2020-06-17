/*
 * @Author: Azhou
 * @Date: 2020-06-15 15:07:23
 * @LastEditors: Azhou
 * @LastEditTime: 2020-06-15 15:15:33
 */
import { defineConfig } from 'umi';
import path from 'path';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  hash: true,
  chainWebpack(memo, { env }) {
    env === 'production' &&
      memo.plugin('workbox-webpack-plugin').use(WorkboxWebpackPlugin.InjectManifest, [pwaConfig]);
  },
});
const pwaConfig = {
  // 目前的service worker 文件
  swSrc: path.join(__dirname, './scripts/pwa/sw.js'),
  // 打包后生成的service worker文件，一般存到disk目录
  swDest: 'sw.js',
};
